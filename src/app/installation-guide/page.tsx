import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { InstallationHero } from "@/components/sections/installation-hero";
import { InstallationOverview } from "@/components/sections/installation-overview";
import { InstallationRequirements } from "@/components/sections/installation-requirements";
import { InstallationDeviceGuide } from "@/components/sections/installation-device-guide";
import { InstallationNetwork } from "@/components/sections/installation-network";
import { InstallationTroubleshooting } from "@/components/sections/installation-troubleshooting";
import { InstallationFaq } from "@/components/sections/installation-faq";
import { InstallationFinalCta } from "@/components/sections/installation-final-cta";
import { canonicalUrl, pageDescriptions, pageTitles } from "@/lib/site";

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
    canonical: canonicalUrl("/installation-guide/"),
  },
  openGraph: {
    title: pageTitles.installationGuide,
    description: pageDescriptions.installationGuide,
    url: canonicalUrl("/installation-guide/"),
  },
  twitter: {
    title: pageTitles.installationGuide,
    description: pageDescriptions.installationGuide,
  },
};

export default function InstallationGuidePage() {
  return (
    <PageShell path="/installation-guide/">
      <InstallationHero />
      <InstallationOverview />
      <InstallationRequirements />
      <InstallationDeviceGuide />
      <InstallationNetwork />
      <InstallationTroubleshooting />
      <InstallationFaq />
      <InstallationFinalCta />
    </PageShell>
  );
}
