import type { Metadata, Viewport } from "next";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";
import "./globals.css";
import { AppShell } from "@/components/AppShell";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://priscilla-prints.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Priscilla Prints | Community print shop directory",
    template: "%s | Priscilla Prints"
  },
  description: "Directory of community print shops and small-run services for fabric, garments, education materials and design work.",
  applicationName: "Priscilla Prints",
  keywords: ["print shops", "screen printing", "fabric printing", "garment printing", "Nairobi printing", "community printing"],
  authors: [{ name: "Priscilla Prints" }],
  creator: "Priscilla Prints",
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Priscilla Prints",
    title: "Priscilla Prints | Print local. Share clear.",
    description: "Find community print shops and prepare files for clearer local print conversations.",
    images: [{ url: "/images/screen-printer.jpg", width: 1125, height: 750, alt: "A screen printer at work" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Priscilla Prints",
    description: "Print local. Share clear.",
    images: ["/images/screen-printer.jpg"]
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#344659",
  colorScheme: "light"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><AppShell>{children}</AppShell></body>
    </html>
  );
}
