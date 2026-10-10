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
] as const;

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getBlogPostByPath(path: string): BlogPost | undefined {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return BLOG_POSTS.find((post) => post.path === normalized);
}
