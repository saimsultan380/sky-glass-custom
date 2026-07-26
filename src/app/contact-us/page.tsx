import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactHelpOptions } from "@/components/sections/contact-help-options";
import { ContactFormSection } from "@/components/sections/contact-form-section";
import { ContactSupportProcess } from "@/components/sections/contact-support-process";
import { ContactFaq } from "@/components/sections/contact-faq";
import { ContactCta } from "@/components/sections/contact-cta";
import {
  siteConfig,
  pageTitles,
  pageDescriptions,
  canonicalUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: pageTitles.contactUs,
  },
  description: pageDescriptions.contactUs,
  keywords: [
    "Contact Sky Glass IPTV",
    "IPTV free trial UK",
    "Sky Glass IPTV support",
    "IPTV setup support UK",
  ],
  alternates: {
    canonical: canonicalUrl("/contact-us/"),
  },
  openGraph: {
    title: pageTitles.contactUs,
    description: pageDescriptions.contactUs,
    url: canonicalUrl("/contact-us/"),
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
    <PageShell path="/contact-us/" className="flex flex-col">
      <ContactHero />
      <ContactFormSection />
      <ContactHelpOptions />
      <ContactSupportProcess />
      <ContactFaq />
      <ContactCta />
    </PageShell>
  );
}
