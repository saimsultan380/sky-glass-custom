/** Canonical app paths — always trailing-slash. */
export const siteRoutes = {
  home: "/sky-glass-iptv/",
  plans: "/iptv-plans/",
  installation: "/iptv-installation/",
  reseller: "/iptv-reseller/",
  contact: "/iptv-support/",
} as const;

export const legacyRoutes = {
  home: "/",
  plans: "/subscription-plans/",
  installation: "/installation-guide/",
  reseller: "/reseller-panel/",
  contact: "/contact-us/",
} as const;
