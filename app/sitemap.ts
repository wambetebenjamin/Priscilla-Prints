import type { MetadataRoute } from "next";
import { shops } from "@/data/shops";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://priscilla-prints.vercel.app";
  const pages = ["", "/shops", "/services", "/file-guide", "/cities", "/list", "/about", "/contact", "/privacy", "/terms"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "/shops" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : 0.7 })),
    ...shops.map((shop) => ({ url: `${base}/shops/${shop.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 }))
  ];
}
