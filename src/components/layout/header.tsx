"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { cn } from "@/lib/utils";
import { whatsappFreeTrialUrl } from "@/lib/site";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Subscription Plan", href: "/subscription-plans/" },
  { label: "Installation Guide", href: "/installation-guide/" },
  { label: "Reseller Plan", href: "/reseller-panel/" },
  { label: "Contact", href: "/contact-us/" },
];

const MENU_EASE = [0.21, 0.47, 0.32, 0.98] as const;

function isActivePath(pathname: string, href: string) {
  const path = pathname.replace(/\/$/, "") || "/";
  const target = href.replace(/\/$/, "") || "/";
  if (target === "/") return path === "/";
  return path === target || path.startsWith(`${target}/`);
}

export function Header() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
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
        <div className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          {/* Nav stays fixed height; menu overlays page content */}
          <div className="relative z-[80]">
            <div
              className={cn(
                "relative border border-[#0B0E2C]/10 transition-[background-color,backdrop-filter,border-radius] duration-300",
                mobileMenuOpen
                  ? "rounded-t-[1px] border-b-transparent bg-white lg:rounded-[1px] lg:border-b-[#0B0E2C]/10 lg:bg-white/65 lg:backdrop-blur-xl lg:backdrop-saturate-150"
                  : "rounded-[1px] bg-white/65 backdrop-blur-xl backdrop-saturate-150",
              )}
            >
              <nav
                aria-label="Main navigation"
                className="relative flex h-[60px] w-full items-center justify-between gap-4 px-5 sm:h-[72px] sm:px-8"
              >
                <Link
                  href="/"
                  id="hero-logo"
                  className="relative z-[1] flex shrink-0 items-center no-underline"
                  onClick={closeMenu}
                >
                  <BrandLogo priority heightClassName="h-8 sm:h-10" />
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

                <div className="relative z-[1] flex items-center gap-3">
                  <a
                    href={whatsappFreeTrialUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="hero-get-started"
                    className="hidden rounded-[1px] bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white transition-opacity duration-150 hover:opacity-90 lg:inline-flex"
                  >
                    Get Started
                  </a>

                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-[1px] text-[#0B0E2C] transition-opacity hover:opacity-70 lg:hidden"
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

            <AnimatePresence initial={false}>
              {mobileMenuOpen && (
                <motion.div
                  key="mobile-nav"
                  aria-label="Mobile navigation"
                  role="navigation"
                  initial={
                    reduceMotion
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  animate={{ height: "auto", opacity: 1 }}
                  exit={
                    reduceMotion
                      ? { height: 0, opacity: 0 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{
                    height: {
                      duration: reduceMotion ? 0.15 : 0.36,
                      ease: MENU_EASE,
                    },
                    opacity: {
                      duration: reduceMotion ? 0.1 : 0.22,
                      ease: MENU_EASE,
                    },
                  }}
                  className="absolute inset-x-0 top-full z-[85] overflow-hidden rounded-none border border-t-0 border-[#0B0E2C]/10 bg-[#ffffff] lg:hidden"
                >
                  <div className="flex flex-col gap-1 px-3 pb-4 pt-2 sm:px-4">
                    {NAV_LINKS.map((link, index) => {
                      const active = isActivePath(pathname, link.href);
                      return (
                        <motion.div
                          key={link.label}
                          initial={
                            reduceMotion ? false : { opacity: 0, y: 10 }
                          }
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.28,
                            delay: reduceMotion ? 0 : 0.06 + index * 0.04,
                            ease: MENU_EASE,
                          }}
                        >
                          <Link
                            href={link.href}
                            className="block rounded-[1px] px-4 py-3.5 text-[16px] font-medium text-[#0B0E2C] transition-colors hover:bg-[#0B0E2C]/5"
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
                        </motion.div>
                      );
                    })}

                    <motion.div
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.28,
                        delay: reduceMotion
                          ? 0
                          : 0.06 + NAV_LINKS.length * 0.04,
                        ease: MENU_EASE,
                      }}
                    >
                      <a
                        href={whatsappFreeTrialUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 flex w-full items-center justify-center rounded-[1px] bg-gradient-brand px-5 py-3.5 text-[15px] font-semibold text-white"
                        onClick={closeMenu}
                      >
                        Get Started
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.button
            key="mobile-nav-scrim"
            type="button"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0.1 : 0.28,
              ease: MENU_EASE,
            }}
            className="fixed inset-0 z-[70] bg-[#0B0E2C]/20 backdrop-blur-[1px] lg:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}
