import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data =
  | {
      productId: string;
      location: string;
      quantity: number;
    }
  | {
      error: string;
    };

/** very simple slug generator – no extra package */
function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      barcode,
      name,
      brand,
      price,
      location,
      quantity,
      reason,
    } = req.body as {
      barcode?: string;
      name?: string;
      brand?: string;
      price?: number;
      location?: string;
      quantity?: number;
      reason?: string;
    };

    if (!barcode || typeof barcode !== "string" || !barcode.trim()) {
      return res.status(400).json({ error: "Missing or invalid barcode" });
    }
    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({ error: "Product name is required" });
    }
    if (!brand || typeof brand !== "string" || !brand.trim()) {
      return res.status(400).json({ error: "Brand is required" });
    }

    const priceNum = typeof price === "number" ? price : Number(price);
    const qtyNum = typeof quantity === "number" ? quantity : Number(quantity);

    if (Number.isNaN(priceNum) || priceNum < 0) {
      return res
        .status(400)
        .json({ error: "Price must be a non-negative number" });
    }

    if (!qtyNum || Number.isNaN(qtyNum) || qtyNum <= 0) {
      return res
        .status(400)
        .json({ error: "Quantity must be a positive integer" });
    }

    const loc = (location || "MAIN").toString().trim() || "MAIN";
    const slug = slugify(name);

    // 1) See if a product ALREADY exists with this barcode or slug
    let product = await prisma.product.findFirst({
      where: {
        OR: [{ barcode: barcode.trim() }, { slug }],
      },
    });

    // 2) If not found, try to create it
    if (!product) {
      try {
        product = await prisma.product.create({
          data: {
            store_id: "store-test-1", // TODO: tie to real store
            name: name.trim(),
            description:
              "Created from quick-create inventory scan. Update details in admin.",
            summary: name.trim(),
            price: priceNum,
            stock: 0,
            slug,
            status: true,
            brand: brand.trim(),
            barcode: barcode.trim(),
          },
        });
      } catch (err: any) {
        // Handle unique constraint on slug or barcode
        if (err?.code === "P2002") {
          // Re-fetch the product now that we know the constraint exists
          product = await prisma.product.findFirst({
            where: {
              OR: [{ barcode: barcode.trim() }, { slug }],
            },
          });

          if (!product) {
            console.error("P2002 but still no product found:", err);
            return res
              .status(500)
              .json({ error: "Product already exists but could not be loaded." });
          }
        } else {
          console.error("create-product-and-scan error (create):", err);
          return res
            .status(500)
            .json({ error: "Failed to create product from scan." });
        }
      }
    }

    // 3) At this point, we MUST have a product
    if (!product) {
      return res
        .status(500)
        .json({ error: "Unable to resolve product for this barcode." });
    }

    // 4) Upsert inventory for this product + location
    const inventory = await prisma.inventoryItem.upsert({
      where: {
        product_location: {
          productId: product.id,
          location: loc,
        },
      },
      create: {
        productId: product.id,
        location: loc,
        quantity: qtyNum,
      },
      update: {
        quantity: { increment: qtyNum },
      },
    });

    // 5) Log the movement
    await prisma.inventoryLog.create({
      data: {
        productId: product.id,
        location: loc,
        delta: qtyNum,
        reason: (reason as string) || "receive",
        correlationId: crypto.randomUUID(),
      },
    });

    return res.status(200).json({
      productId: product.id,
      location: inventory.location,
      quantity: inventory.quantity,
    });
  } catch (err) {
    console.error("create-product-and-scan error:", err);
    return res
      .status(500)
      .json({ error: "Internal server error (create-product-and-scan)" });
  }
}
