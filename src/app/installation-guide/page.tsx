import type { Metadata } from "next";
import { LegacyRedirect } from "@/components/legacy-redirect";
import { canonicalUrl } from "@/lib/site";
import { siteRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: {
    canonical: canonicalUrl(siteRoutes.installation),
  },
};

export default function InstallationGuideRedirect() {
  return <LegacyRedirect href={siteRoutes.installation} />;
}
