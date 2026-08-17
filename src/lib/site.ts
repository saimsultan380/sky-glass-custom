/**
 * Site-wide brand & SEO defaults for Sky Glass IPTV.
 * Update `siteUrl` (and email) when the final domain is ready.
 *
 * Canonical policy: always non-www HTTPS with a trailing slash.
 * `pageTitles` are the exact SERP / browser <title> strings — keep them in sync
 * with each page's metadata.title.absolute.
 */
export const siteConfig = {
  name: "Sky Glass IPTV",
  shortName: "Sky Glass",
  tagline: "Live TV, Sports, Movies & Series in One Place",
  description:
    "Explore Sky Glass IPTV for live TV, sports, movies and popular series in the UK. Compare flexible plans, request a 24-hour trial and get setup support.",
  /** Production origin — always non-www, no trailing slash */
  siteUrl: "https://skyglass-iptv.co",
  email: "support@skyglass-iptv.co",
  /** E.164 display + digits-only for wa.me / tel links */
  phone: "+447532818129",
  phoneDigits: "447532818129",
  locale: "en_GB",
  twitterHandle: "@skyglassiptv",
} as const;

/** Prefill texts used on free-trial vs subscription CTAs. */
export const whatsappMessages = {
  freeTrial: "Sky glass iptv free trial",
  subscription: "Sky glass iptv subscription",
} as const;

/** WhatsApp chat URL (optional prefilled message). */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.phoneDigits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function whatsappFreeTrialUrl(): string {
  return whatsappUrl(whatsappMessages.freeTrial);
}

export function whatsappSubscriptionUrl(): string {
  return whatsappUrl(whatsappMessages.subscription);
}

/** Indexable app routes (pathname without domain; always trailing-slash). */
export const sitePages = [
  {
    path: "/",
    name: "Home",
    priority: 1,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/subscription-plans/",
    name: "Subscription Plans",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/installation-guide/",
    name: "Installation Guide",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/reseller-panel/",
    name: "Reseller Panel",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/contact-us/",
    name: "Contact Us",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
] as const;

export type SitePagePath = (typeof sitePages)[number]["path"];

/**
 * Build a canonical absolute URL: non-www + HTTPS + trailing slash.
 * Accepts `/about`, `/about/`, or `about` — always returns one canonical form.
 */
export function canonicalUrl(path: string = "/"): string {
  const origin = siteConfig.siteUrl.replace(/\/+$/, "");
  const trimmed = path.trim();
  if (!trimmed || trimmed === "/") return `${origin}/`;

  const withLeading = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  const withoutTrailing = withLeading.replace(/\/+$/, "");
  return `${origin}${withoutTrailing}/`;
}

/** Ensure an internal path uses a trailing slash (except bare `/`). */
export function trailingPath(path: string): string {
  if (!path || path === "/") return "/";
  const [pathname, hash = ""] = path.split("#");
  const [base, query = ""] = pathname.split("?");
  if (!base || base === "/") {
    return `/${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
  }
  const withSlash = base.endsWith("/") ? base : `${base}/`;
  return `${withSlash}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
}

export type BreadcrumbCrumb = {
  name: string;
  path: string;
};

/**
 * Breadcrumb trail for a page. Homepage is a single Home crumb;
 * inner pages are Home › Page.
 */
export function pageBreadcrumbs(path: SitePagePath): BreadcrumbCrumb[] {
  const page = sitePages.find((entry) => entry.path === path);
  if (!page || path === "/") {
    return [{ name: "Home", path: "/" }];
  }
  return [
    { name: "Home", path: "/" },
    { name: page.name, path: page.path },
  ];
}

/** schema.org/BreadcrumbList JSON-LD for Google sitelink breadcrumbs. */
export function breadcrumbJsonLd(crumbs: BreadcrumbCrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: canonicalUrl(crumb.path),
    })),
  };
}

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
