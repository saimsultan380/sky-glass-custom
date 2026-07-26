import type { ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import type { SitePagePath } from "@/lib/site";

type PageShellProps = {
  path: SitePagePath;
  children: ReactNode;
  className?: string;
};

/**
 * Shared page chrome — Header, BreadcrumbList JSON-LD (SEO only), Footer.
 * Use on every indexable page so schema cannot be skipped.
 */
export function PageShell({
  path,
  children,
  className = "relative flex flex-col",
}: PageShellProps) {
  return (
    <main className={className}>
      <Header />
      <Breadcrumbs path={path} />
      {children}
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
