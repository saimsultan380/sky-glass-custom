import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Page Not Found | Sky Glass IPTV",
  },
  description:
    "The page you requested could not be found. Return to Sky Glass IPTV home, plans, installation guide or contact support.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

const helpfulLinks = [
  { href: "/", label: "Home" },
  { href: "/subscription-plans/", label: "Subscription Plans" },
  { href: "/installation-guide/", label: "Installation Guide" },
  { href: "/reseller-panel/", label: "Reseller Panel" },
  { href: "/contact-us/", label: "Contact & Free Trial" },
] as const;

export default function NotFound() {
  return (
    <main className="relative flex min-h-full flex-col">
      <Header />
      <section className="relative flex flex-1 items-center bg-white py-16 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(123,47,255,0.08),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(37,99,235,0.06),_transparent_50%)]"
        />
        <div className="relative mx-auto w-full max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold tracking-[0.18em] text-gradient-brand sm:text-[12px]">
            ERROR 404
          </p>
          <h1 className="mt-3 text-[32px] font-bold leading-tight tracking-tight text-[#0B0E2C] sm:text-5xl">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#5C607A] sm:text-base">
            The page you are looking for does not exist, may have moved, or the
            link is incorrect. Use the links below to continue browsing Sky Glass
            IPTV.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex rounded-[1px] bg-gradient-brand px-6 py-3 text-sm font-semibold text-white transition-opacity duration-150 hover:opacity-90"
            >
              Back to Home
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-[1px] border border-[#0B0E2C]/15 bg-white px-6 py-3 text-sm font-semibold text-[#0B0E2C] transition-colors duration-150 hover:border-[#0B0E2C]/30 hover:bg-[#0B0E2C]/[0.02]"
            >
              Contact Support
            </a>
          </div>

          <nav
            aria-label="Helpful links"
            className="mx-auto mt-12 max-w-lg border-t border-[#0B0E2C]/10 pt-8"
          >
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5C607A]">
              Popular pages
            </p>
            <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
              {helpfulLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] font-medium text-[#0B0E2C] underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
