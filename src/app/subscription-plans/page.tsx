import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { PlansHero } from "@/components/sections/plans-hero";
import { PlansChoiceSection } from "@/components/sections/plans-choice-section";
import { PlansPricingSection } from "@/components/sections/plans-pricing-section";
import { PlansComparisonSection } from "@/components/sections/plans-comparison-section";
import { PlansIncludedSection } from "@/components/sections/plans-included-section";
import { PlansDevicesSection } from "@/components/sections/plans-devices-section";
import { PlansFourStepsSection } from "@/components/sections/plans-four-steps-section";
import { PlansTrialSection } from "@/components/sections/plans-trial-section";
import { PlansBenefitsSection } from "@/components/sections/plans-benefits-section";
import { PlansFaqSection } from "@/components/sections/plans-faq-section";
import { PlansCtaSection } from "@/components/sections/plans-cta-section";
import { canonicalUrl, pageDescriptions, pageTitles } from "@/lib/site";

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
    canonical: canonicalUrl("/subscription-plans/"),
  },
  openGraph: {
    title: pageTitles.subscriptionPlans,
    description: pageDescriptions.subscriptionPlans,
    url: canonicalUrl("/subscription-plans/"),
  },
  twitter: {
    title: pageTitles.subscriptionPlans,
    description: pageDescriptions.subscriptionPlans,
  },
};

export default function SubscriptionPlansPage() {
  return (
    <PageShell path="/subscription-plans/">
      <PlansHero />
      <PlansChoiceSection />
      <PlansPricingSection variant="plans" />
      <PlansComparisonSection />
      <PlansIncludedSection />
      <PlansDevicesSection />
      <PlansFourStepsSection />
      <PlansTrialSection />
      <PlansBenefitsSection />
      <PlansFaqSection />
      <PlansCtaSection />
    </PageShell>
  );
}
