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
    "Discover Sky Glass IPTV UK for live TV, sports, movies and popular series. Request a 24-hour trial, compare flexible plans and receive setup support.",
  /** Production domain */
  siteUrl: "https://skyglass-iptv.co",
  email: "support@skyglass-iptv.co",
  locale: "en_GB",
  twitterHandle: "@skyglassiptv",
} as const;

/** Exact SERP titles (shown in Google + browser tab) */
export const pageTitles = {
  home: "Sky Glass IPTV UK – Live TV, Sports, Movies & Series",
  subscriptionPlans: "Sky Glass IPTV Subscription Plans UK – Flexible Packages",
  installationGuide: "Sky Glass IPTV Installation Guide – Firestick, Android & TV",
  resellerPanel: "Sky Glass IPTV Reseller Panel UK – Start Your Own IPTV Business",
  contactUs: "IPTV Free Trial UK – Test Sky Glass Free for 24 Hours",
} as const;

export const pageDescriptions = {
  home: siteConfig.description,
  subscriptionPlans:
    "Compare Sky Glass IPTV subscription plans for UK viewers. Choose Standard or Premium, select a duration and request a 24-hour trial before subscribing.",
  installationGuide:
    "Install Sky Glass IPTV on Firestick, Android, Smart TVs, Apple devices, Windows and Mac using clear setup steps and compatible application guidance.",
  resellerPanel:
    "Become an IPTV reseller in the UK with Sky Glass. White label branding, flexible credits, sub-reseller tools, instant activation and dedicated support.",
  contactUs:
    "Claim a free IPTV trial UK with Sky Glass — 24 hours of access to live TV, sports, movies and series. Contact us for trials, setup and support.",
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
  openGraph: {
    type: "website" as const,
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: pageTitles.home,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
  },
  twitter: {
    card: "summary_large_image" as const,
    title: pageTitles.home,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};
