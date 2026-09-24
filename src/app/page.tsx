import type { Metadata } from "next";
import { LegacyRedirect } from "@/components/legacy-redirect";
import { canonicalUrl } from "@/lib/site";
import { siteRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: {
    absolute: "Sky Glass IPTV UK | Plans, Devices & 24-Hour Trial",
  },
  description:
    "Explore Sky Glass IPTV for live TV, sports, movies and series. Compare Standard and Premium prices, check your device and request a 24-hour trial.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: canonicalUrl(siteRoutes.home),
  },
};

export default function RootRedirect() {
  return <LegacyRedirect href={siteRoutes.home} />;
}
