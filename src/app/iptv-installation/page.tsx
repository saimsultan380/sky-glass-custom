import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { InstallationHero } from "@/components/sections/installation-hero";
import { InstallationRequirements } from "@/components/sections/installation-requirements";
import { InstallationOverview } from "@/components/sections/installation-overview";
import { InstallationDeviceGuide } from "@/components/sections/installation-device-guide";
import { InstallationTroubleshooting } from "@/components/sections/installation-troubleshooting";
import { InstallationFaq } from "@/components/sections/installation-faq";
import { InstallationFinalCta } from "@/components/sections/installation-final-cta";
import { canonicalUrl, pageDescriptions, pageTitles } from "@/lib/site";
import { siteRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: {
    absolute: pageTitles.installationGuide,
  },
  description: pageDescriptions.installationGuide,
  keywords: [
    "Sky Glass IPTV Installation Guide",
    "IPTV installation guide",
    "IPTV setup guide",
    "install IPTV on Firestick",
    "IPTV Smart TV setup",
  ],
  alternates: {
    canonical: canonicalUrl(siteRoutes.installation),
  },
  openGraph: {
    title: pageTitles.installationGuide,
    description: pageDescriptions.installationGuide,
    url: canonicalUrl(siteRoutes.installation),
  },
  twitter: {
    title: pageTitles.installationGuide,
    description: pageDescriptions.installationGuide,
  },
};

export default function InstallationGuidePage() {
  return (
    <PageShell path={siteRoutes.installation}>
      <InstallationHero />
      <InstallationRequirements />
      <InstallationOverview />
      <InstallationDeviceGuide />
      <InstallationTroubleshooting />
      <InstallationFaq />
      <InstallationFinalCta />
    </PageShell>
  );
}
