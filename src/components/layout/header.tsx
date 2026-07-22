"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
      <header className="sticky top-0 z-[80] w-full bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex h-[60px] w-full items-center justify-between gap-4 rounded-[8px] border border-[#0B0E2C]/10 bg-white px-6 shadow-[0_4px_20px_rgba(11,14,44,0.04)] sm:h-[72px] sm:px-8"
          >
            <Link
              href="/"
              id="hero-logo"
              className="relative flex h-14 shrink-0 items-center no-underline sm:h-16"
              onClick={closeMenu}
            >
              <Image
                src="/logo.PNG"
                alt="Sky Glass"
                width={320}
                height={90}
                priority
                unoptimized
                className="h-14 w-auto object-contain sm:h-16"
              />
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
      </div>
    </header>

      {mobileMenuOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-[70] bg-[#0B0E2C]/25 lg:hidden"
            onClick={closeMenu}
          />

          <nav
            aria-label="Mobile navigation"
            className="fixed inset-x-0 top-[80px] z-[75] border-b border-[#0B0E2C]/10 bg-white px-4 py-6 shadow-sm sm:top-[96px] sm:px-6 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-[10px] px-4 py-3 text-base font-medium text-[#0B0E2C] transition-colors hover:bg-[#0B0E2C]/4"
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
                className="mt-3 flex w-full items-center justify-center rounded-[8px] bg-gradient-brand px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                onClick={closeMenu}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
