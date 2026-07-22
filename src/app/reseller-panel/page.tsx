import type { Metadata } from "next";
import { siteConfig, pageTitles, pageDescriptions } from "@/lib/site";
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
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export const metadata: Metadata = {
  title: pageTitles.resellerPanel,
  description: pageDescriptions.resellerPanel,
  keywords: [
    "Sky Glass IPTV Reseller UK",
    "IPTV reseller UK",
    "IPTV reseller panel",
    "IPTV reseller programme",
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/reseller-panel`,
  },
  openGraph: {
    title: pageTitles.resellerPanel,
    description: pageDescriptions.resellerPanel,
    url: `${siteConfig.siteUrl}/reseller-panel`,
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
    <main className="flex flex-col">
      <Header />
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
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
