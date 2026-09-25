import type { Metadata } from "next";
import { LegacyRedirect } from "@/components/legacy-redirect";
import { canonicalUrl, pageDescriptions, pageTitles } from "@/lib/site";
import { siteRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: {
    absolute: pageTitles.home,
  },
  description: pageDescriptions.home,
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: canonicalUrl(siteRoutes.home),
  },
};

export default function RootRedirect() {
  return <LegacyRedirect href={siteRoutes.home} />;
}
