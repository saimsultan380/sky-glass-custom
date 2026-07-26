import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { SmarterIptvExperienceSection } from "@/components/sections/smarter-iptv-experience-section";
import { WhyChooseSkyGlassSection } from "@/components/sections/why-choose-sky-glass-section";
import { PlansPricingSection } from "@/components/sections/plans-pricing-section";
import { EntertainmentCategoriesSection } from "@/components/sections/entertainment-categories-section";
import { PopularDevicesSection } from "@/components/sections/popular-devices-section";
import { FourSimpleStepsSection } from "@/components/sections/four-simple-steps-section";
import { EverydayViewingSection } from "@/components/sections/everyday-viewing-section";
import { FreeTrialSection } from "@/components/sections/free-trial-section";
import { StreamingTipsSection } from "@/components/sections/streaming-tips-section";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { KeyBenefitsSection } from "@/components/sections/key-benefits-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HomepageCtaSection } from "@/components/sections/homepage-cta-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { canonicalUrl, pageDescriptions, pageTitles } from "@/lib/site";

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
    canonical: canonicalUrl("/"),
  },
  openGraph: {
    title: pageTitles.home,
    description: pageDescriptions.home,
    url: canonicalUrl("/"),
  },
  twitter: {
    title: pageTitles.home,
    description: pageDescriptions.home,
  },
};

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Header />
      <HeroSection />
      <SmarterIptvExperienceSection />
      <WhyChooseSkyGlassSection />
      <EntertainmentCategoriesSection />
      <PlansPricingSection />
      <PopularDevicesSection />
      <FourSimpleStepsSection />
      <EverydayViewingSection />
      <FreeTrialSection />
      <StreamingTipsSection />
      <ComparisonSection />
      <KeyBenefitsSection />
      <FaqSection />
      <HomepageCtaSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
