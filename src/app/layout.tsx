import Providers from "@/contexts/Providers";
import { opensans } from "@/lib/fonts";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://wisconsinbargains.com"
  ),
  title: {
    default: "Wisconsin Bargains | Liquidation & Pallet Deals",
    template: "%s | Wisconsin Bargains",
  },
  description:
    "Wisconsin Bargains is your local source for liquidation pallets, open-box returns, and overstock deals. Scan barcodes, track inventory, and price items fast.",
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "Wisconsin Bargains – Pallet & Liquidation Deals",
    description:
      "Liquidation pallets, open-box returns, and overstock bargains across Wisconsin. Built on a custom barcode and inventory system.",
    url: "/",
    siteName: "Wisconsin Bargains",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Wisconsin Bargains",
    "pallet resale",
    "liquidation deals",
    "overstock",
    "open-box",
    "discount inventory",
    "bargain store",
    "reseller tools",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo-icon.png" />
      </head>
      <body
        className={`${opensans.className} flex min-h-screen flex-col text-sm text-gray-custom-1 antialiased`}
      >
        <NextTopLoader />
        <Providers>{children}</Providers>
        <Toaster
          position="top-right"
          gutter={12}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "12px",
              maxWidth: "500px",
              padding: "6px 9px",
              backgroundColor: "white",
              color: "#353535",
            },
          }}
        />
      </body>
    </html>
  );
}