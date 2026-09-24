import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PlansHero } from "@/components/sections/plans-hero";
import { PlansComparisonSection } from "@/components/sections/plans-comparison-section";
import { PlansIncludedSection } from "@/components/sections/plans-included-section";
import { PlansChoiceSection } from "@/components/sections/plans-choice-section";
import { PlansDevicesSection } from "@/components/sections/plans-devices-section";
import { PlansFourStepsSection } from "@/components/sections/plans-four-steps-section";
import { PlansFaqSection } from "@/components/sections/plans-faq-section";
import { PlansCtaSection } from "@/components/sections/plans-cta-section";
import { canonicalUrl, pageDescriptions, pageTitles } from "@/lib/site";
import { siteRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: {
    absolute: pageTitles.subscriptionPlans,
  },
  description: pageDescriptions.subscriptionPlans,
  keywords: [
    "Sky Glass IPTV Subscription Plans",
    "IPTV subscription UK",
    "IPTV plans UK",
    "IPTV packages UK",
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
      <PlansComparisonSection />
      <PlansIncludedSection />
      <PlansChoiceSection />
      <PlansDevicesSection />
      <PlansFourStepsSection />
      <PlansFaqSection />
      <PlansCtaSection />
    </PageShell>
  );
}
