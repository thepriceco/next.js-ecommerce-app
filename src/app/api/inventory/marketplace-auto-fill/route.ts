import { NextRequest, NextResponse } from "next/server";

/**
 * Stub marketplace auto-fill endpoint.
 *
 * Shape is ready for a real Amazon/Walmart integration later.
 * For now we:
 *  - accept { barcode, name, brand }
 *  - fabricate amazonPrice / walmartPrice
 *  - compute msrp = max(amazon, walmart)
 *  - compute ourRetail = msrp * 0.7 (30% off)
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    const { barcode, name, brand } = body as {
      barcode?: string;
      name?: string;
      brand?: string;
    };

    if (!barcode && !name) {
      return NextResponse.json(
        {
          error:
            "At least a barcode or product name is required for marketplace auto-fill.",
        },
        { status: 400 }
      );
    }

    // For now, this is a stub. In a real implementation, you’d call
    // your own backend service or a 3rd-party API that wraps
    // Amazon/Walmart product search.

    const safeName = (name || "Unknown product").toString();
    const safeBrand = (brand || "Unknown brand").toString();
    const safeBarcode = (barcode || "N/A").toString();

    // Fake prices – deterministic-ish so it feels stable while testing.
    const basePrice =
      safeBarcode.length > 0
        ? (safeBarcode.charCodeAt(0) % 10) + 5
        : 9.99;

    const amazonPrice = Number((basePrice + 3.0).toFixed(2));
    const walmartPrice = Number((basePrice + 1.5).toFixed(2));

    const msrp = Math.max(amazonPrice, walmartPrice);
    const ourRetail = Number((msrp * 0.7).toFixed(2)); // 30% less than higher of the two

    const payload = {
      source: "stubbed",
      barcode: safeBarcode,
      name: safeName,
      brand: safeBrand,
      amazonPrice,
      walmartPrice,
      msrp,
      ourRetail,
      // In the real version these would come from the marketplace:
      images: [] as string[],
      description: `${safeBrand} ${safeName} – placeholder description from marketplace-auto-fill stub.`,
    };

    return NextResponse.json(payload, { status: 200 });
  } catch (err) {
    console.error("Marketplace auto-fill error:", err);
    return NextResponse.json(
      { error: "Internal server error (marketplace auto-fill)" },
      { status: 500 }
    );
  }
}