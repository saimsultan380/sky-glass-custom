import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { canonicalUrl, siteConfig, siteMetadataBase } from "@/lib/site";
import { JsonLd } from "@/components/seo/json-ld";
import { AutoScrollReveal } from "@/components/animation/auto-scroll-reveal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${siteConfig.siteUrl}/`),
  ...siteMetadataBase,
  icons: {
    icon: [{ url: "/logo.PNG", type: "image/png" }],
    shortcut: "/logo.PNG",
    apple: "/logo.PNG",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, "Sky Glass IPTV UK", "IPTV UK"],
    url: canonicalUrl("/"),
    description: siteConfig.description,
    inLanguage: "en-GB",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: canonicalUrl("/"),
    logo: `${siteConfig.siteUrl}/logo.PNG`,
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      telephone: siteConfig.phone,
      contactType: "customer support",
      availableLanguage: ["English"],
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd data={jsonLd} />
      </head>
      <body className="relative flex min-h-full flex-col bg-white text-[#0B0E2C]">
        <AutoScrollReveal />
        <div className="relative z-10 flex min-h-full flex-1 flex-col bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
