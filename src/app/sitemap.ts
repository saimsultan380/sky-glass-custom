import type { MetadataRoute } from "next";
import { canonicalUrl, sitePages } from "@/lib/site";

/** Required for `output: "export"` — generate sitemap.xml at build time. */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitePages.map((page) => ({
    url: canonicalUrl(page.path),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
