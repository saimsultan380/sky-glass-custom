import type { Metadata } from "next";
import { siteConfig, pageTitles, pageDescriptions } from "@/lib/site";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactHelpOptions } from "@/components/sections/contact-help-options";
import { ContactFormSection } from "@/components/sections/contact-form-section";
import { ContactSupportProcess } from "@/components/sections/contact-support-process";
import { ContactFaq } from "@/components/sections/contact-faq";
import { ContactCta } from "@/components/sections/contact-cta";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export const metadata: Metadata = {
  title: pageTitles.contactUs,
  description: pageDescriptions.contactUs,
  keywords: [
    "Contact Sky Glass IPTV",
    "IPTV free trial UK",
    "Sky Glass IPTV support",
    "IPTV setup support UK",
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/contact-us`,
  },
  openGraph: {
    title: pageTitles.contactUs,
    description: pageDescriptions.contactUs,
    url: `${siteConfig.siteUrl}/contact-us`,
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitles.contactUs,
    description: pageDescriptions.contactUs,
  },
};

export default function ContactUsPage() {
  return (
    <main className="flex flex-col">
      <Header />
      <ContactHero />
      <ContactFormSection />
      <ContactHelpOptions />
      <ContactSupportProcess />
      <ContactFaq />
      <ContactCta />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
