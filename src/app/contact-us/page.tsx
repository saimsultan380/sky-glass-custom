import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
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
  title: "Contact Sky Glass IPTV – UK Trial & Setup Support",
  description: "Contact Sky Glass IPTV for a 24-hour UK trial, subscription assistance, device setup guidance, renewals and technical support on popular devices.",
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
    title: "Contact Sky Glass IPTV – UK Trial & Setup Support",
    description: "Contact Sky Glass IPTV for a 24-hour UK trial, subscription assistance, device setup guidance, renewals and technical support on popular devices.",
    url: `${siteConfig.siteUrl}/contact-us`,
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sky Glass IPTV – UK Trial & Setup Support",
    description: "Contact Sky Glass IPTV for a 24-hour UK trial, subscription assistance, device setup guidance, renewals and technical support on popular devices.",
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
