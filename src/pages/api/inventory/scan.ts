import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const ScanPayload = z.object({
  barcode: z.string().min(1),
  location: z.string().default("MAIN"),
  quantity: z.number().int().positive().default(1),
  reason: z
    .enum(["receive", "cycle", "sale", "return", "damage"])
    .default("receive"),
  correlationId: z.string().optional(),
});

type ScanResponse = {
  productId: string;
  location: string;
  quantity: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const parsed = ScanPayload.safeParse(req.body);

    if (!parsed.success) {
      return res
        .status(400)
        .json({ error: parsed.error.flatten(), code: "BAD_PAYLOAD" });
    }

    const { barcode, location, quantity, reason, correlationId } =
      parsed.data;

    // 1) Find existing product by barcode
    const product = await prisma.product.findUnique({
      where: { barcode },
    });

    if (!product) {
      return res.status(404).json({
        code: "PRODUCT_NOT_FOUND",
        message:
          "No product found with this barcode. You can create one from the scanner.",
      });
    }

    // 2) Upsert inventory entry for this product + location
    const inventory = await prisma.inventoryItem.upsert({
      where: {
        product_location: {
          productId: product.id,
          location,
        },
      },
      create: {
        productId: product.id,
        location,
        quantity,
      },
      update: {
        quantity: { increment: quantity },
      },
    });

    // 3) Add a ledger entry
    await prisma.inventoryLog.create({
      data: {
        productId: product.id,
        location,
        delta: quantity,
        reason,
        correlationId: correlationId ?? crypto.randomUUID(),
      },
    });

    const payload: ScanResponse = {
      productId: product.id,
      location: inventory.location,
      quantity: inventory.quantity,
    };

    return res.status(200).json(payload);
  } catch (err) {
    console.error("Inventory scan error:", err);
    return res
      .status(500)
      .json({ error: "Internal server error", code: "SERVER_ERROR" });
  }
}