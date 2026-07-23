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
    "Discover Sky Glass IPTV for live TV, sports, movies and popular series in the UK. Request a 24-hour trial, compare plans and receive setup support.",
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
  resellerPanel: "Sky Glass IPTV Reseller UK – Panel, Credits & Packages",
  contactUs: "Contact Sky Glass IPTV – UK Trial & Setup Support",
} as const;

export const pageDescriptions = {
  home: siteConfig.description,
  subscriptionPlans:
    "Compare Sky Glass IPTV subscription plans for UK viewers. Choose Standard or Premium, select a duration and request a 24-hour trial before subscribing.",
  installationGuide:
    "Install Sky Glass IPTV on Firestick, Android, Smart TVs, Apple devices, Windows and Mac using clear setup steps and compatible application guidance.",
  resellerPanel:
    "Join the Sky Glass IPTV Reseller UK programme. Manage customer subscriptions and credits through one panel with flexible packages and reseller support.",
  contactUs:
    "Contact Sky Glass IPTV for a 24-hour UK trial, subscription assistance, device setup guidance, renewals and technical support on popular devices.",
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
