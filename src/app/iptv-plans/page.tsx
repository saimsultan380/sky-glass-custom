import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PlansHero } from "@/components/sections/plans-hero";
import { PricingTablesSection } from "@/components/sections/pricing-tables-section";
import { PricingIncludesSection } from "@/components/sections/pricing-includes-section";
import { PricingBeforeChooseSection } from "@/components/sections/pricing-before-choose-section";
import { PlansCtaSection } from "@/components/sections/plans-cta-section";
import { canonicalUrl, pageDescriptions, pageTitles } from "@/lib/site";
import { siteRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: {
    absolute: pageTitles.subscriptionPlans,
  },
  description: pageDescriptions.subscriptionPlans,
  keywords: [
    "Sky Glass subscription",
    "IPTV subscription UK",
    "Sky Glass IPTV plans",
    "Sky Glass IPTV pricing",
  ],
  alternates: {
    canonical: canonicalUrl(siteRoutes.plans),
  },
  openGraph: {
    title: pageTitles.subscriptionPlans,
    description: pageDescriptions.subscriptionPlans,
    url: canonicalUrl(siteRoutes.plans),
  },
  twitter: {
    title: pageTitles.subscriptionPlans,
    description: pageDescriptions.subscriptionPlans,
  },
};

export default function SubscriptionPlansPage() {
  return (
    <PageShell path={siteRoutes.plans}>
      <PlansHero />
      <PricingTablesSection />
      <PricingIncludesSection />
      <PricingBeforeChooseSection />
      <PlansCtaSection />
    </PageShell>
  );
}
