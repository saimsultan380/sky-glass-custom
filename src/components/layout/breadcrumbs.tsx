import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  pageBreadcrumbs,
  type SitePagePath,
} from "@/lib/site";

type BreadcrumbsProps = {
  path: SitePagePath;
};

/** Invisible BreadcrumbList JSON-LD only — for Google SERP, not page UI. */
export function Breadcrumbs({ path }: BreadcrumbsProps) {
  return <JsonLd data={breadcrumbJsonLd(pageBreadcrumbs(path))} />;
}
