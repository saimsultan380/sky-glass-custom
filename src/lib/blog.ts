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
] as const;

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getBlogPostByPath(path: string): BlogPost | undefined {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return BLOG_POSTS.find((post) => post.path === normalized);
}
