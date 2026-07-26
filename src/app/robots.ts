import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/** Required for `output: "export"` — generate robots.txt at build time. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/404/", "/_next/"],
    },
    host: siteConfig.siteUrl.replace(/^https?:\/\//, ""),
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
