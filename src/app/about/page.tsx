import Link from "next/link";

export default function AboutPage() {
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
            <Link href="/contact" className="hover:text-emerald-400">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <section className="flex-1 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-8 space-y-8">
          <div>
            <h1 className="text-2xl font-semibold text-slate-50 mb-2">
              About Wisconsin Bargains
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Wisconsin Bargains is a local-first liquidation and pallet resale
              outfit. This page is a placeholder for your story — how you buy
              pallets, how you price items, and how customers can shop in
              person, via Marketplace, TikTok, or other channels.
            </p>
          </div>

          {/* Three-photo layout placeholders */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 flex flex-col gap-2">
              <div className="h-32 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-slate-500">
                Drop warehouse / pallet photo
              </div>
              <div className="text-xs text-slate-300">
                Short caption about how you source pallets or where you pick
                them up.
              </div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 flex flex-col gap-2">
              <div className="h-32 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-slate-500">
                Drop store / setup photo
              </div>
              <div className="text-xs text-slate-300">
                Show your sorting area, garage setup, or local pickup location.
              </div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 flex flex-col gap-2">
              <div className="h-32 rounded-lg bg-slate-800 flex items-center justify-center text-xs text-slate-500">
                Drop team / people photo
              </div>
              <div className="text-xs text-slate-300">
                A spot for you and your partner, or anyone helping on pallet
                flips.
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 text-sm text-slate-300">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-emerald-300">
                How it works
              </h2>
              <p>
                Use your inventory scanner to build a clean catalog from each
                pallet. From there, you can copy photos and product data from
                Amazon or Walmart, then push listings to Facebook Marketplace,
                TikTok Shop, or local buyers.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-emerald-300">
                Where we sell
              </h2>
              <p>
                This is a placeholder for your real list: Facebook Marketplace,
                local groups, TikTok Shop, maybe Amazon or your own events. Add
                links once accounts and storefronts are ready.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}