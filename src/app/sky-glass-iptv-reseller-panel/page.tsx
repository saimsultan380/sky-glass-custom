import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { BlogResellerPanelArticle } from "@/components/sections/blog-reseller-panel-article";
import { JsonLd } from "@/components/seo/json-ld";
import { getBlogPost } from "@/lib/blog";
import { canonicalUrl, siteConfig } from "@/lib/site";

const POST = getBlogPost("sky-glass-iptv-reseller-panel")!;

export const metadata: Metadata = {
  title: {
    absolute: POST.title,
  },
  description: POST.description,
  keywords: [...POST.keywords],
  alternates: {
    canonical: canonicalUrl(POST.path),
  },
  openGraph: {
    title: POST.title,
    description: POST.description,
    url: canonicalUrl(POST.path),
    type: "article",
    ...(POST.image ? { images: [POST.image] } : {}),
  },
  twitter: {
    title: POST.title,
    description: POST.description,
    ...(POST.image ? { images: [POST.image] } : {}),
  },
};

export default function SkyGlassIptvResellerPanelPage() {
  return (
    <PageShell path="/sky-glass-iptv-reseller-panel/">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: POST.title,
          description: POST.description,
          ...(POST.image
            ? { image: `${siteConfig.siteUrl}${POST.image}` }
            : {}),
          url: canonicalUrl(POST.path),
          mainEntityOfPage: canonicalUrl(POST.path),
          author: {
            "@type": "Organization",
            name: siteConfig.name,
          },
          publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.siteUrl,
          },
        }}
      />
      <BlogResellerPanelArticle />
    </PageShell>
  );
}
