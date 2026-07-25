/**
 * Site-wide brand & SEO defaults for Sky Glass IPTV.
 * Update `siteUrl` (and email) when the final domain is ready.
 *
 * `pageTitles` are the exact SERP / browser <title> strings — keep them in sync
 * with each page's metadata.title.absolute.
 */
export const siteConfig = {
  name: "Sky Glass IPTV",
  shortName: "Sky Glass",
  tagline: "Live TV, Sports, Movies & Series in One Place",
  description:
    "Explore Sky Glass IPTV for live TV, sports, movies and popular series in the UK. Compare flexible plans, request a 24-hour trial and get setup support.",
  /** Production domain */
  siteUrl: "https://skyglass-iptv.co",
  email: "support@skyglass-iptv.co",
  locale: "en_GB",
  twitterHandle: "@skyglassiptv",
} as const;

/** Exact SERP titles (shown in Google + browser tab) */
export const pageTitles = {
  home: "Sky Glass IPTV - Live TV, Sports, Movies & Series UK",
  subscriptionPlans: "Sky Glass IPTV - Subscription Plans & 24-Hour Trial UK",
  installationGuide: "Sky Glass IPTV - Installation Guide for Firestick & TV",
  resellerPanel: "Sky Glass IPTV - Reseller Panel, Credits & UK Packages",
  contactUs: "Sky Glass IPTV - Free Trial, Setup Help & Support UK",
} as const;

export const pageDescriptions = {
  home: siteConfig.description,
  subscriptionPlans:
    "Compare Sky Glass IPTV subscription plans for UK viewers. Check durations, connection options and features, then request a 24-hour trial before subscribing.",
  installationGuide:
    "Follow the Sky Glass IPTV installation guide for Firestick, Android, Smart TVs, Apple devices, Windows and Mac, with clear device-specific setup help.",
  resellerPanel:
    "Join the Sky Glass IPTV reseller programme in the UK. Manage customers, subscriptions and credits through one panel with flexible reseller package options.",
  contactUs:
    "Contact Sky Glass IPTV for a 24-hour UK trial, subscription guidance, device setup help, renewals and technical support across popular streaming devices.",
} as const;

export const siteMetadataBase = {
  title: pageTitles.home,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "Sky Glass IPTV",
    "Sky Glass IPTV UK",
    "IPTV UK",
    "IPTV service UK",
    "IPTV subscription UK",
  ],
  verification: {
    google: "IDq3qEilNHxsdwGR-sehnbYmYBXmqeelPC32VHOIZ4g",
  },
  openGraph: {
    type: "website" as const,
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: pageTitles.home,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    images: [
      {
        url: "/logo.PNG",
        width: 845,
        height: 295,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: pageTitles.home,
    description: siteConfig.description,
    images: ["/logo.PNG"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
