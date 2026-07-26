import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { ResellerHero } from "@/components/sections/reseller-hero";
import { ResellerIntro } from "@/components/sections/reseller-intro";
import { ResellerBenefits } from "@/components/sections/reseller-benefits";
import { ResellerFeatures } from "@/components/sections/reseller-features";
import { ResellerSteps } from "@/components/sections/reseller-steps";
import { ResellerCredits } from "@/components/sections/reseller-credits";
import { ResellerPackages } from "@/components/sections/reseller-packages";
import { ResellerGrowth } from "@/components/sections/reseller-growth";
import { ResellerResponsibilities } from "@/components/sections/reseller-responsibilities";
import { ResellerFaq } from "@/components/sections/reseller-faq";
import { ResellerCta } from "@/components/sections/reseller-cta";
import {
  siteConfig,
  pageTitles,
  pageDescriptions,
  canonicalUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: pageTitles.resellerPanel,
  },
  description: pageDescriptions.resellerPanel,
  keywords: [
    "Sky Glass IPTV Reseller UK",
    "IPTV reseller UK",
    "IPTV reseller panel",
    "IPTV reseller programme",
  ],
  alternates: {
    canonical: canonicalUrl("/reseller-panel/"),
  },
  openGraph: {
    title: pageTitles.resellerPanel,
    description: pageDescriptions.resellerPanel,
    url: canonicalUrl("/reseller-panel/"),
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitles.resellerPanel,
    description: pageDescriptions.resellerPanel,
  },
};

export default function ResellerPanelPage() {
  return (
    <PageShell path="/reseller-panel/" className="flex flex-col">
      <ResellerHero />
      <ResellerIntro />
      <ResellerBenefits />
      <ResellerFeatures />
      <ResellerSteps />
      <ResellerCredits />
      <ResellerPackages />
      <ResellerGrowth />
      <ResellerResponsibilities />
      <ResellerFaq />
      <ResellerCta />
    </PageShell>
  );
}
