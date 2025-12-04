"use client";

import Link from "next/link";

const CATEGORIES = [
  { id: "apparel", label: "Apparel", blurb: "Clothing, jackets, and basics." },
  {
    id: "footwear",
    label: "Footwear",
    blurb: "Sneakers, boots, slides, and more."
  },
  {
    id: "electronics",
    label: "Electronics",
    blurb: "Headphones, speakers, smart home gadgets."
  },
  {
    id: "small-appliances",
    label: "Small Appliances",
    blurb: "Kitchen, cleaning, and countertop helpers."
  },
  {
    id: "sports-outdoors",
    label: "Sports & Outdoors",
    blurb: "Fitness, camping, and backyard gear."
  },
  {
    id: "tools-home",
    label: "Tools & Home Improvement",
    blurb: "Power tools, hand tools, and fixtures."
  },
  {
    id: "toys-toddlers",
    label: "Toys & Toddlers",
    blurb: "Kid toys, learning toys, and baby items."
  }
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* HEADER */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500 text-slate-900 font-bold">
              WB
            </div>
            <div className="leading-tight">
              <div className="font-semibold">Wisconsin Bargains</div>
              <div className="text-xs text-slate-400">
                Liquidation &amp; Pallet Deals
              </div>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-200 md:flex">
            <Link href="/shop" className="hover:text-emerald-400">
              Shop Deals
            </Link>
            <Link href="/about" className="hover:text-emerald-400">
              About / How It Works
            </Link>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 py-12 md:py-16 lg:py-20">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
            {/* Left side: hero copy */}
            <div className="space-y-6">
              <p className="inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/30">
                New • Built for pallet flippers &amp; resellers
              </p>

              <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                Turn pallets into profit
                <span className="block text-emerald-400">
                  with real-time inventory.
                </span>
              </h1>

              <p className="text-sm leading-relaxed text-slate-300">
                Wisconsin Bargains is your local hub for liquidation pallets, open-box
                returns, and overstock deals. Scan barcodes with your phone,
                auto-build product cards, and price everything about 30% under the
                big guys — in seconds.
              </p>

              <div className="flex flex-wrap gap-3">
                {/* Public CTA: only deals, no scanner */}
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900/40 px-4 py-2.5 text-sm font-semibold text-slate-100 hover:border-emerald-400 hover:text-emerald-300"
                >
                  Browse current deals
                </Link>
              </div>
            </div>

            {/* Right side: keep simple placeholder card for now */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-xs text-slate-300">
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3">
                <span>Live Pallet Snapshot</span>
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                  Demo inventory
                </span>
              </div>
              <p className="text-slate-400">
                This is demo data from your internal scanner. Real items will appear
                here once you start scanning pallets.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-slate-500">
          <span>© {year} Wisconsin Bargains. All rights reserved.</span>
          <span>Built on Next.js + PlanetScale</span>
        </div>
      </footer>
    </div>
  );
}
