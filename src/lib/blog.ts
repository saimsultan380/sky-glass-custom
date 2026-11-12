export type BlogPost = {
  slug: string;
  /** Canonical path with trailing slash (SEO URL). */
  path: string;
  title: string;
  /** Shorter label for breadcrumbs / cards where space is tight. */
  shortTitle: string;
  excerpt: string;
  description: string;
  keywords: readonly string[];
  /** Public path to cover image, e.g. `/sky-glass-firestick-blog-thumbnail.png`. */
  image?: string;
  imageAlt?: string;
};

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: "how-to-install-sky-glass-on-firestick",
    path: "/how-to-install-sky-glass-on-firestick/",
    title: "How to Install Sky Glass IPTV on Firestick or Fire TV?",
    shortTitle: "Firestick Install Guide",
    excerpt:
      "Install Sky Glass IPTV on Firestick or Fire TV: what you need, Appstore or sideload steps, login, and common fixes.",
    description:
      "Learn how to install Sky Glass IPTV on Firestick or Fire TV with this easy guide. Follow the setup steps, sign in, and fix common installation issues today.",
    image: "/sky-glass-firestick-blog-thumbnail.png",
    imageAlt: "Sky Glass IPTV on Amazon Firestick installation guide",
    keywords: [
      "how to install Sky Glass on Firestick",
      "Sky Glass IPTV Firestick",
      "Sky Glass IPTV Fire TV",
      "install Sky Glass app on Firestick",
      "Sky Glass IPTV sideloading",
      "Sky Glass IPTV login Firestick",
    ],
  },
  {
    slug: "how-to-install-sky-glass-iptv-on-iphone",
    path: "/how-to-install-sky-glass-iptv-on-iphone/",
    title: "How to Install or Get Sky Glass IPTV on iPhone in 3 Minutes?",
    shortTitle: "iPhone Install Guide",
    excerpt:
      "Get Sky Glass IPTV on iPhone with a compatible iOS player, add your IPTV details, and fix login, buffering, and EPG issues.",
    description:
      "Learn how to install Sky Glass IPTV on iPhone using a compatible iOS player. Follow simple setup steps, add your IPTV details, and fix common issues.",
    image: "/sky-glass-iptv-iphone-blog-thumbnail.png",
    imageAlt: "Sky Glass IPTV on iPhone installation guide",
    keywords: [
      "how to install Sky Glass IPTV on iPhone",
      "Sky Glass IPTV iPhone",
      "Sky Glass IPTV iOS",
      "get Sky Glass IPTV on iPhone",
      "Sky Glass IPTV App Store",
      "Sky Glass IPTV player iPhone",
    ],
  },
  {
    slug: "sky-glass-iptv-keeps-buffering",
    path: "/sky-glass-iptv-keeps-buffering/",
    title: "Sky Glass IPTV Keeps Buffering? Top 15 Fixes to Stop the Lag",
    shortTitle: "Buffering Fixes",
    excerpt:
      "15 practical fixes for Sky Glass IPTV buffering on Firestick, Wi-Fi, freezing, slow channels, and playback problems.",
    description:
      "Sky Glass IPTV keeps buffering? Try 15 practical fixes for Firestick, Wi-Fi, freezing, slow channels, and playback problems to stream more smoothly.",
    image: "/sky-glass-iptv-buffering-fixes-thumbnail.png",
    imageAlt: "Sky Glass IPTV buffering fixes guide",
    keywords: [
      "Sky Glass IPTV buffering",
      "Sky Glass IPTV keeps buffering",
      "fix Sky Glass IPTV lag",
      "Sky Glass IPTV Firestick buffering",
      "Sky Glass IPTV freezing",
      "stop Sky Glass IPTV buffering",
    ],
  },
  {
    slug: "sky-glass-iptv-vs-tivimate",
    path: "/sky-glass-iptv-vs-tivimate/",
    title: "Sky Glass IPTV vs TiviMate: Which Player Is Better for Your Setup?",
    shortTitle: "vs TiviMate",
    excerpt:
      "Compare Sky Glass IPTV and TiviMate features, Firestick fit, login checks, and which player suits your IPTV setup.",
    description:
      "Compare Sky Glass IPTV vs TiviMate, explore features, check Firestick compatibility & fix login issues to choose the right IPTV player for your setup today.",
    image: "/sky-glass-iptv-vs-tivimate-thumbnail.png",
    imageAlt: "Sky Glass IPTV vs TiviMate player comparison",
    keywords: [
      "Sky Glass IPTV vs TiviMate",
      "TiviMate vs Sky Glass IPTV",
      "best IPTV player Firestick",
      "TiviMate not working",
      "Sky Glass IPTV player",
      "TiviMate Firestick",
    ],
  },
  {
    slug: "sky-glass-iptv-subscription-expired",
    path: "/sky-glass-iptv-subscription-expired/",
    title: "Sky Glass IPTV Subscription Expired? Here's What to Do",
    shortTitle: "Subscription Expired",
    excerpt:
      "Check if your Sky Glass IPTV plan expired, renew Standard or Premium, and fix login or playback issues after renewal.",
    description:
      "Sky Glass IPTV subscription expired? Check your account status, renew Standard or Premium plans, fix post-renewal issues, and compare 12-month options.",
    image: "/sky-glass-iptv-subscription-expired-thumbnail.png",
    imageAlt: "Sky Glass IPTV subscription expired renewal guide",
    keywords: [
      "Sky Glass IPTV subscription expired",
      "renew Sky Glass IPTV",
      "Sky Glass IPTV renewal",
      "IPTV subscription expired",
      "Sky Glass IPTV 12 month",
      "Sky Glass IPTV plans",
    ],
  },
  {
    slug: "iptv-playlist-not-loading",
    path: "/iptv-playlist-not-loading/",
    title: "IPTV Playlist Not Loading? Fix M3U & Xtream Codes Errors",
    shortTitle: "Playlist Not Loading",
    excerpt:
      "Fix M3U URL errors, Xtream Codes login issues, expired subscriptions, and connection problems when your IPTV playlist will not load.",
    description:
      "IPTV playlist not loading? Fix M3U URL errors, Xtream Codes login issues, expired subscriptions & connection problems with these simple steps in minutes.",
    image: "/iptv-playlist-not-loading-thumbnail.png",
    imageAlt: "IPTV playlist not loading — fix M3U and Xtream Codes errors",
    keywords: [
      "IPTV playlist not loading",
      "M3U playlist error",
      "Xtream Codes login failed",
      "fix IPTV playlist",
      "IPTV M3U not working",
      "Sky Glass IPTV playlist",
    ],
  },
  {
    slug: "sky-glass-iptv-trial-vs-paid-subscription",
    path: "/sky-glass-iptv-trial-vs-paid-subscription/",
    title: "Sky Glass IPTV Trial vs Paid Subscription: Key Differences",
    shortTitle: "Trial vs Paid",
    excerpt:
      "Compare the 24-hour Sky Glass IPTV trial with full paid plans, device testing, package access, and Standard subscription prices.",
    description:
      "Compare the Sky Glass IPTV trial vs Sky Glass IPTV Full subscription. Learn about the 24-hour trial, paid plans, device compatibility & subscription prices.",
    image: "/sky-glass-iptv-trial-vs-paid-thumbnail.png",
    imageAlt: "Sky Glass IPTV trial vs full paid subscription comparison",
    keywords: [
      "Sky Glass IPTV trial",
      "Sky Glass IPTV free trial",
      "Sky Glass IPTV subscription",
      "trial vs paid IPTV",
      "24 hour IPTV trial",
      "Sky Glass IPTV plans",
    ],
  },
  {
    slug: "sky-glass-iptv-epg-not-working",
    path: "/sky-glass-iptv-epg-not-working/",
    title: "Sky Glass IPTV EPG Not Working: Fix Missing TV Guide",
    shortTitle: "EPG Not Working",
    excerpt:
      "Fix a missing Sky Glass IPTV TV guide, blank channels, wrong programme times, and EPG loading issues with simple troubleshooting steps.",
    description:
      "Sky Glass IPTV EPG not working? Fix a missing TV guide, blank channels, wrong programme times, and EPG loading issues with these simple steps.",
    image: "/sky-glass-iptv-epg-not-working-thumbnail-v2.png",
    imageAlt: "Sky Glass IPTV EPG not working — fix missing TV guide",
    keywords: [
      "Sky Glass IPTV EPG not working",
      "IPTV TV guide blank",
      "fix IPTV EPG",
      "EPG missing channels",
      "IPTV programme guide",
      "Sky Glass IPTV XMLTV",
    ],
  },
  {
    slug: "sky-glass-iptv-keeps-signing-out",
    path: "/sky-glass-iptv-keeps-signing-out/",
    title: "Sky Glass IPTV Keeps Signing Out: 10 Ways to Fix It",
    shortTitle: "Keeps Signing Out",
    excerpt:
      "Find out why your Sky Glass IPTV app forgets login details and how to fix account, device, and connection sign-out problems.",
    description:
      "Sky Glass IPTV keeps signing out? Find out why your IPTV app forgets login details and learn how to fix account, device, and connection problems.",
    image: "/sky-glass-iptv-keeps-signing-out-thumbnail-v2.png",
    imageAlt: "Sky Glass IPTV keeps signing out — fix IPTV login issues",
    keywords: [
      "Sky Glass IPTV keeps signing out",
      "IPTV app keeps logging out",
      "IPTV forgets login",
      "IPTV Smarters Pro signing out",
      "TiviMate keeps signing out",
      "fix IPTV login",
    ],
  },
  {
    slug: "sky-glass-iptv-reseller-panel",
    path: "/sky-glass-iptv-reseller-panel/",
    title: "Get Sky Glass IPTV Reseller Panel | Become IPTV Reseller UK",
    shortTitle: "Reseller Panel",
    excerpt:
      "Explore the Sky Glass IPTV reseller panel, credit system, customer account management, and how to become an IPTV reseller in the UK.",
    description:
      "Explore the Sky Glass IPTV reseller panel, learn how IPTV reseller credits work & manage customer accounts in IPTV Reseller Panel. Become IPTV Reseller UK",
    image: "/sky-glass-iptv-reseller-panel-thumbnail-v2.png",
    imageAlt: "Sky Glass IPTV reseller panel — start your UK business",
    keywords: [
      "Sky Glass IPTV reseller panel",
      "IPTV reseller UK",
      "become IPTV reseller",
      "IPTV reseller credits",
      "reseller IPTV panel",
      "Sky Glass IPTV reseller",
    ],
  },
  {
    slug: "iptv-sky-glass-subscription-packages-deals-prices-uk",
    path: "/iptv-sky-glass-subscription-packages-deals-prices-uk/",
    title: "Sky Glass Subscription: IPTV Sky Glass Deals & Packages UK",
    shortTitle: "Subscription Packages",
    excerpt:
      "Compare Sky Glass IPTV subscription packages, deals, and UK prices — Standard plans from £12, Premium options, and a 24-hour trial.",
    description:
      "IPTV Sky Glass subscription, Sky Glass deals, packages & prices in the UK. Compare plans, explore features and choose the right Sky Glass IPTV package today!",
    image: "/sky-glass-iptv-subscription-packages-thumbnail-v2.png",
    imageAlt:
      "Sky Glass IPTV subscription packages, deals and UK prices",
    keywords: [
      "Sky Glass subscription",
      "IPTV Sky Glass deals",
      "Sky Glass packages UK",
      "Sky Glass IPTV prices",
      "Sky Glass IPTV subscription",
      "Sky Glass package prices",
    ],
  },
] as const;

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getBlogPostByPath(path: string): BlogPost | undefined {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return BLOG_POSTS.find((post) => post.path === normalized);
}
