import Link from "next/link";

export default function ContactPage() {
  const year = new Date().getFullYear();

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
        <div className="mx-auto max-w-4xl px-4 py-8 space-y-8">
          <div>
            <h1 className="text-2xl font-semibold text-slate-50 mb-2">
              Contact & Social
            </h1>
            <p className="text-sm text-slate-300">
              This page is a shell for your real contact details and links.
              Replace the placeholders below once you lock in phone numbers,
              pickup locations, and social accounts.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2 text-sm">
              <h2 className="text-sm font-semibold text-emerald-300">
                Direct contact
              </h2>
              <p className="text-slate-300">
                Phone: <span className="text-slate-400">[add phone]</span>
              </p>
              <p className="text-slate-300">
                Email: <span className="text-slate-400">[add email]</span>
              </p>
              <p className="text-slate-300">
                Pickup area:{" "}
                <span className="text-slate-400">[city / neighborhood]</span>
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-3 text-sm">
              <h2 className="text-sm font-semibold text-emerald-300">
                Social & marketplaces
              </h2>
              <ul className="space-y-1 text-slate-300 text-sm">
                <li>
                  Facebook Page / Group:{" "}
                  <span className="text-slate-400">[add link]</span>
                </li>
                <li>
                  Facebook Marketplace seller profile:{" "}
                  <span className="text-slate-400">[add link]</span>
                </li>
                <li>
                  TikTok Shop:{" "}
                  <span className="text-slate-400">[add link]</span>
                </li>
                <li>
                  Amazon (if you decide to):{" "}
                  <span className="text-slate-400">[add link or remove]</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900/40 p-4 text-xs text-slate-300">
            <div className="font-semibold text-slate-100 mb-1">
              Photo / banner slot
            </div>
            <p>
              Use this space for a simple banner image — for example, a collage
              of pallets, stacked boxes, or a clean shot of your best deals
              table. We can swap this text for an &lt;Image&gt; component later.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950/95">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>© {year} Wisconsin Bargains. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-3">
            <span>DM for current pallet inventory and pickup times.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}