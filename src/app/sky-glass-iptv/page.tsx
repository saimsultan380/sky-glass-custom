import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { SmarterIptvExperienceSection } from "@/components/sections/smarter-iptv-experience-section";
import { WhyChooseSkyGlassSection } from "@/components/sections/why-choose-sky-glass-section";
import { PlansPricingSection } from "@/components/sections/plans-pricing-section";
import { EntertainmentCategoriesSection } from "@/components/sections/entertainment-categories-section";
import { PopularDevicesSection } from "@/components/sections/popular-devices-section";
import { FourSimpleStepsSection } from "@/components/sections/four-simple-steps-section";
import { FreeTrialSection } from "@/components/sections/free-trial-section";
import { EverydayViewingSection } from "@/components/sections/everyday-viewing-section";
import { StreamingTipsSection } from "@/components/sections/streaming-tips-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HomepageCtaSection } from "@/components/sections/homepage-cta-section";
import { PageShell } from "@/components/layout/page-shell";
import { canonicalUrl, pageDescriptions, pageTitles } from "@/lib/site";
import { siteRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: {
    absolute: pageTitles.home,
  },
  description: pageDescriptions.home,
  keywords: [
    "Sky Glass IPTV",
    "Sky Glass IPTV UK",
    "IPTV UK",
    "IPTV service UK",
    "IPTV subscription UK",
  ],
  alternates: {
    canonical: canonicalUrl(siteRoutes.home),
  },
  openGraph: {
    title: pageTitles.home,
    description: pageDescriptions.home,
    url: canonicalUrl(siteRoutes.home),
  },
  twitter: {
    title: pageTitles.home,
    description: pageDescriptions.home,
  },
};

export default function Home() {
  return (
    <PageShell path={siteRoutes.home}>
      <HeroSection />
      <SmarterIptvExperienceSection />
      <WhyChooseSkyGlassSection />
      <PlansPricingSection />
      <EntertainmentCategoriesSection />
      <PopularDevicesSection />
      <FourSimpleStepsSection />
      <FreeTrialSection />
      <EverydayViewingSection />
      <StreamingTipsSection />
      <FaqSection />
      <HomepageCtaSection />
    </PageShell>
  );
}
