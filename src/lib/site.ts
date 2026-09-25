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
    "Explore Sky Glass IPTV, an independent internet-based TV service for UK viewers. See available entertainment, check supported devices and find pricing or setup help.",
  /** Production origin — always non-www, no trailing slash */
  siteUrl: "https://skyglass-iptv.co",
  email: "support@skyglass-iptv.co",
  /** Display format used on-page; digits-only for wa.me / tel links */
  phone: "+44 7532 818129",
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

/** Prefill a pricing enquiry with tier, devices, duration and displayed price. */
export function whatsappPlanEnquiryUrl(details: {
  tier: string;
  devices: number;
  duration: string;
  price: string;
}): string {
  return whatsappUrl(
    `Sky Glass IPTV ${details.tier} — ${details.devices} simultaneous device(s), ${details.duration}, ${details.price}`,
  );
}

/** Indexable app routes (pathname without domain; always trailing-slash). */
export const sitePages = [
  {
    path: "/sky-glass-iptv/",
    name: "Home",
    priority: 1,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/iptv-plans/",
    name: "Pricing",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/iptv-installation/",
    name: "Installation Guide",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/iptv-reseller/",
    name: "Reseller",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/iptv-support/",
    name: "Contact",
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
  const homePath = sitePages[0].path;
  if (!page || path === homePath) {
    return [{ name: "Home", path: homePath }];
  }
  return [
    { name: "Home", path: homePath },
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
  home: "Sky Glass IPTV UK | Live TV, Movies & Device Setup",
  subscriptionPlans: "Sky Glass IPTV Pricing | 1–4 Device Plans",
  installationGuide: "Sky Glass IPTV Installation Guide | Set Up Your Device",
  resellerPanel: "Sky Glass IPTV Reseller Programme | Panel & Credits",
  contactUs: "Contact Sky Glass IPTV | Trials & Account Support",
} as const;

export const pageDescriptions = {
  home: siteConfig.description,
  subscriptionPlans:
    "Compare Sky Glass IPTV prices by subscription length, Standard or Premium access, and 1–4 simultaneous devices. Check the full term cost and what each option includes.",
  installationGuide:
    "Find setup steps for compatible Fire TV, Android, Smart TV and Apple devices, plus help with login, app and playback problems.",
  resellerPanel:
    "Learn how the Sky Glass IPTV reseller panel handles customer accounts, credits and renewals. Review package questions and contact the reseller team.",
  contactUs:
    "Request a trial or get help with device setup, playback, renewals and your account. Send your device details to help the support team respond.",
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
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: pageTitles.home,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
