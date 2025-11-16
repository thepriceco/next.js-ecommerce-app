import Link from "next/link";

const categories = [
  "Apparel",
  "Footwear",
  "Electronics",
  "Small Household Appliances",
  "Sports & Outdoors",
  "Tools & Home Improvement",
  "Toys & Toddlers",
];

const placeholderProducts = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Placeholder Item ${i + 1}`,
  category: categories[i % categories.length],
  price: "$0.00",
}));

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-slate-900">
              WB
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-wide uppercase text-emerald-400">
                Wisconsin Bargains
              </span>
              <span className="text-xs text-slate-300">
                Liquidation &amp; Pallet Deals
              </span>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-200 md:flex">
            <Link href="/" className="hover:text-emerald-400">
              Home
            </Link>
            <Link href="/inventory/scan" className="hover:text-emerald-400">
              Inventory Scanner
            </Link>
            <Link href="/about" className="hover:text-emerald-400">
              About
            </Link>
          </nav>
        </div>
      </header>

      <section className="flex-1 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-slate-50">
                Shop Deals
              </h1>
              <p className="text-sm text-slate-400">
                Empty grid for now – drop in product photos, titles, and prices
                as you process pallets.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              {categories.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-200"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Product grid – all placeholders for now */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {placeholderProducts.map((p) => (
              <div
                key={p.id}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 shadow-sm shadow-slate-900/50"
              >
                {/* Image slot */}
                <div className="mb-3 h-40 w-full rounded-lg bg-slate-800/70 flex items-center justify-center text-xs text-slate-500">
                  Drop product photo here
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold text-emerald-300 uppercase tracking-wide">
                      {p.category}
                    </div>
                    <div className="text-sm font-medium text-slate-50">
                      {p.title}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-emerald-400">
                    {p.price}
                  </div>
                </div>

                <div className="mt-2 text-[11px] text-slate-400">
                  Short description placeholder – paste in a one-liner from
                  Amazon / Walmart later.
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                  <span>SKU / Barcode placeholder</span>
                  <span>Qty: –</span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-500">
            This page is intentionally “dumb” for now. Once photos and real data
            are ready, we can wire it to your live inventory.
          </p>
        </div>
      </section>
    </main>
  );
}