import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { BlogListingSection } from "@/components/sections/blog-listing-section";
import { canonicalUrl, pageDescriptions, pageTitles } from "@/lib/site";
import { siteRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: {
    absolute: pageTitles.blog,
  },
  description: pageDescriptions.blog,
  keywords: [
    "Sky Glass IPTV blog",
    "IPTV guides UK",
    "Sky Glass IPTV tips",
  ],
  alternates: {
    canonical: canonicalUrl(siteRoutes.blog),
  },
  openGraph: {
    title: pageTitles.blog,
    description: pageDescriptions.blog,
    url: canonicalUrl(siteRoutes.blog),
  },
  twitter: {
    title: pageTitles.blog,
    description: pageDescriptions.blog,
  },
};

export default function BlogPage() {
  return (
    <PageShell path={siteRoutes.blog}>
      <BlogListingSection />
    </PageShell>
  );
}
