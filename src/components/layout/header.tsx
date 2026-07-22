"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Plans", href: "/subscription-plans" },
  { label: "Installation Guide", href: "/installation-guide" },
  { label: "Reseller", href: "/reseller-panel" },
  { label: "Contact", href: "/contact-us" },
];

function isActivePath(pathname: string, href: string) {
  const path = pathname.replace(/\/$/, "") || "/";
  const target = href.replace(/\/$/, "") || "/";
  if (target === "/") return path === "/";
  return path === target || path.startsWith(`${target}/`);
}

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-[80] w-full">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex h-[60px] w-full items-center justify-between gap-4 rounded-[8px] border border-white/40 bg-white/60 px-6 shadow-[0_4px_20px_rgba(11,14,44,0.06)] backdrop-blur-xl backdrop-saturate-150 sm:h-[72px] sm:px-8"
          >
            <Link
              href="/"
              id="hero-logo"
              className="relative flex shrink-0 items-center no-underline"
              onClick={closeMenu}
            >
              <BrandLogo priority heightClassName="h-11 sm:h-[52px]" />
            </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = isActivePath(pathname, link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative pb-1 text-[15px] font-medium text-[#0B0E2C] transition-opacity duration-150 hover:opacity-70"
                >
                  {link.label}
                  {active && (
                    <span
                      aria-hidden
                      className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-gradient-brand"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact-us"
              id="hero-get-started"
              className="hidden rounded-[8px] bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white transition-opacity duration-150 hover:opacity-90 lg:inline-flex"
            >
              Get Started
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] text-[#0B0E2C] transition-opacity hover:opacity-70 lg:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" strokeWidth={1.75} />
              ) : (
                <Menu className="h-6 w-6" strokeWidth={1.75} />
              )}
            </button>
          </div>
          </nav>

          {mobileMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="absolute inset-x-4 top-full z-[75] mt-3 rounded-[12px] border border-white/40 bg-white/80 p-3 shadow-[0_16px_40px_rgba(11,14,44,0.14)] backdrop-blur-2xl backdrop-saturate-150 sm:inset-x-6 sm:p-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-[10px] px-4 py-3 text-base font-medium text-[#0B0E2C] transition-colors hover:bg-[#0B0E2C]/5"
                    onClick={closeMenu}
                  >
                    <span className="relative inline-block pb-0.5">
                      {link.label}
                      {active && (
                        <span
                          aria-hidden
                          className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-gradient-brand"
                        />
                      )}
                    </span>
                  </Link>
                );
              })}

              <Link
                href="/contact-us"
                className="mt-2 flex w-full items-center justify-center rounded-[8px] bg-gradient-brand px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                onClick={closeMenu}
              >
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>

      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-[70] bg-[#0B0E2C]/20 lg:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
}
