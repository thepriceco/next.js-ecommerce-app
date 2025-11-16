import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const LookupPayload = z.object({
  barcode: z.string().min(1),
});

type MarketplaceResult = {
  barcode: string;
  name: string;
  brand: string;
  weightGrams?: number | null;
  amazonPrice?: number | null;
  walmartPrice?: number | null;
  ourRetailPrice?: number | null;
  amazonUrl?: string | null;
  walmartUrl?: string | null;
  imageUrl?: string | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const parsed = LookupPayload.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      code: "BAD_PAYLOAD",
      error: parsed.error.flatten(),
    });
  }

  const { barcode } = parsed.data;

  try {
    // TODO: replace stubs with real Amazon/Walmart lookups using official APIs.
    // For now, return a fake result so we can wire UI & pricing logic.

    const fakeAmazonPrice = 24.99;
    const fakeWalmartPrice = 21.5;

    const higher = Math.max(fakeAmazonPrice, fakeWalmartPrice);
    const ourRetail = Number((higher * 0.7).toFixed(2));

    const payload: MarketplaceResult = {
      barcode,
      name: "Stubbed Marketplace Product",
      brand: "StubBrand",
      weightGrams: 1200,
      amazonPrice: fakeAmazonPrice,
      walmartPrice: fakeWalmartPrice,
      ourRetailPrice: ourRetail,
      amazonUrl: "https://www.amazon.com/dp/EXAMPLE",
      walmartUrl: "https://www.walmart.com/ip/EXAMPLE",
      imageUrl:
        "https://via.placeholder.com/600x600.png?text=Marketplace+Stub",
    };

    return res.status(200).json(payload);
  } catch (err) {
    console.error("Marketplace lookup error:", err);
    return res
      .status(500)
      .json({ code: "MARKETPLACE_ERROR", error: "Lookup failed" });
  }
}