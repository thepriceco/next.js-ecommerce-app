import Link from "next/link";

const categories = [
  {
    name: "Apparel",
    blurb: "Clothing, outerwear, and soft goods from major retailers.",
  },
  {
    name: "Footwear",
    blurb: "Shoes, boots, sandals, and more – all liquidation and returns.",
  },
  {
    name: "Electronics",
    blurb: "Headphones, speakers, smart home devices, and gadgets.",
  },
  {
    name: "Small Household Appliances",
    blurb: "Blenders, vacuums, coffee makers, and similar small appliances.",
  },
  {
    name: "Sports & Outdoors",
    blurb: "Fitness gear, camping, outdoor toys, and seasonal items.",
  },
  {
    name: "Tools & Home Improvement",
    blurb: "Hand tools, power tools, and DIY home improvement items.",
  },
  {
    name: "Toys & Toddlers",
    blurb: "Kids’ toys, learning items, and toddler gear.",
  },
];

export default function CategoriesPage() {
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
            <Link href="/shop" className="hover:text-emerald-400">
              Shop
            </Link>
            <Link href="/about" className="hover:text-emerald-400">
              About
            </Link>
          </nav>
        </div>
      </header>

      <section className="flex-1 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="text-2xl font-semibold text-slate-50 mb-2">
            Inventory Categories
          </h1>
          <p className="text-sm text-slate-400 mb-6">
            Each tile below is a placeholder for its own photo and section
            later. For now, use this as your map of what you like to sell in
            Wisconsin.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 flex flex-col gap-3"
              >
                {/* Photo slot */}
                <div className="h-32 w-full rounded-lg bg-slate-800/70 flex items-center justify-center text-xs text-slate-500 mb-1">
                  Drop category photo here
                </div>

                <div className="text-sm font-semibold text-emerald-300">
                  {cat.name}
                </div>
                <div className="text-xs text-slate-300">{cat.blurb}</div>

                <div className="mt-auto pt-2 text-[11px] text-slate-500 border-t border-slate-800">
                  Later we can link each category to filtered shop views or
                  dedicated landing pages.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}