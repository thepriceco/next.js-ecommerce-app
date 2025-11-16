import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px  -4 py-4">
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
            <Link href="/shop" className="hover:text-emerald-400">
              Shop Deals
            </Link>
            <Link href="/inventory/scan" className="hover:text-emerald-400">
              Inventory Scanner
            </Link>
            <Link href="/about" className="hover:text-emerald-400">
              About / How It Works
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative flex-1">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#22c55e22,_transparent_55%),_radial-gradient(circle_at_bottom,_#0f172a,_#020617)]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl flex-col items-center justify-center px-4 py-10 lg:flex-row lg:items-stretch lg:gap-10">
          {/* Left: hero copy */}
          <div className="flex flex-1 flex-col justify-center gap-6 max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200 w-fit">
              New • Built for pallet flippers &amp; resellers
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Turn <span className="text-emerald-400">pallets</span> into profit
              with{" "}
              <span className="underline decoration-emerald-400/70">
                real-time inventory
              </span>
              .
            </h1>

            <p className="text-sm leading-relaxed text-slate-300">
              Wisconsin Bargains is your local hub for liquidation pallets,
              open-box returns, and overstock deals. Scan barcodes with your
              phone, auto-build product cards from Amazon &amp; Walmart, and
              price everything about 30% under the big guys — in seconds.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/inventory/scan"
                className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
              >
                Open Inventory Scanner
              </Link>

              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900/40 px-4 py-2.5 text-sm font-medium text-slate-100 hover:border-emerald-400/70 hover:text-emerald-200"
              >
                Browse current deals
              </Link>
            </div>

            <div className="mt-4 grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-3">
                <div className="text-emerald-400 font-semibold text-xs mb-1">
                  Scan &amp; match
                </div>
                <p>Use your iPhone or tablet to scan barcodes right off the pallet.</p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-3">
                <div className="text-emerald-400 font-semibold text-xs mb-1">
                  Auto-price engine
                </div>
                <p>
                  Pull pricing from Amazon / Walmart and auto-set your retail at
                  ~30% off.
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-3">
                <div className="text-emerald-400 font-semibold text-xs mb-1">
                  Sell everywhere
                </div>
                <p>
                  Prep listings for Facebook Marketplace, TikTok Shop, and local
                  buyers.
                </p>
              </div>
            </div>
          </div>

          {/* Right: “live inventory” mock card */}
          <div className="mt-10 flex flex-1 items-center justify-center lg:mt-0">
            <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-2xl shadow-emerald-500/15 backdrop-blur">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-xs font-medium text-slate-300">
                  Live Pallet Snapshot
                  <div className="text-[10px] text-emerald-400/80">
                    Demo inventory from your scanner
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold text-emerald-300">
                  SYNCED
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-200">
                <div className="flex items-center justify-between rounded-lg bg-slate-800/70 p-2.5">
                  <div>
                    <div className="font-semibold">
                      Electronics &amp; Small Tech
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Headphones • speakers • smart home
                    </div>
                  </div>
                  <div className="text-right text-[11px]">
                    <div className="font-mono text-emerald-400">37 units</div>
                    <div className="text-slate-400">Avg margin ~42%</div>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-slate-800/40 p-2.5">
                  <div>
                    <div className="font-semibold">Home &amp; Bedding</div>
                    <div className="text-[11px] text-slate-400">
                      Sheets • decor • misc returns
                    </div>
                  </div>
                  <div className="text-right text-[11px]">
                    <div className="font-mono text-emerald-400">22 units</div>
                    <div className="text-slate-400">Ready for Marketplace</div>
                  </div>
                </div>

                <div className="rounded-lg border border-dashed border-slate-700 p-3 text-[11px] text-slate-300">
                  <div className="mb-1 font-semibold text-slate-100">
                    Next step: connect sales channels
                  </div>
                  <ul className="list-disc pl-4 space-y-0.5">
                    <li>
                      Export clean titles &amp; images for Facebook Marketplace
                    </li>
                    <li>Prep CSVs for TikTok Shop &amp; other marketplaces</li>
                    <li>Track what sold vs what’s still on the pallet</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3 text-[11px] text-slate-400">
                <div>Built for two-person pallet teams.</div>
                <Link
                  href="/inventory/scan"
                  className="text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  Launch scanner →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950/95">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} Wisconsin Bargains. All rights
            reserved.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span>Serving Wisconsin pallet buyers &amp; resellers.</span>
            <span className="text-slate-600">
              Inventory tooling powered by your custom Pria stack.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}