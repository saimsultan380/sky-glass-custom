import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  pageBreadcrumbs,
  trailingPath,
  type SitePagePath,
} from "@/lib/site";

type BreadcrumbsProps = {
  path: SitePagePath;
  /** Hide the visual trail on the homepage (JSON-LD still emitted). */
  showTrail?: boolean;
};

export function Breadcrumbs({ path, showTrail }: BreadcrumbsProps) {
  const crumbs = pageBreadcrumbs(path);
  const visible = showTrail ?? path !== "/";

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      {visible ? (
        <nav
          aria-label="Breadcrumb"
          className="border-b border-[#0B0E2C]/06 bg-white"
        >
          <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 py-3 text-[13px] text-[#5C607A] sm:px-6 lg:px-8">
            {crumbs.map((crumb, index) => {
              const isLast = index === crumbs.length - 1;
              return (
                <li key={crumb.path} className="inline-flex items-center gap-1.5">
                  {index > 0 ? (
                    <ChevronRight
                      className="h-3.5 w-3.5 shrink-0 text-[#0B0E2C]/35"
                      aria-hidden
                    />
                  ) : null}
                  {isLast ? (
                    <span
                      aria-current="page"
                      className="font-medium text-[#0B0E2C]"
                    >
                      {crumb.name}
                    </span>
                  ) : (
                    <Link
                      href={trailingPath(crumb.path)}
                      className="transition-colors hover:text-[#E91E8C]"
                    >
                      {crumb.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      ) : null}
    </>
  );
}
