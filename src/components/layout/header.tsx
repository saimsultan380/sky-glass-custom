"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { cn } from "@/lib/utils";
import { whatsappFreeTrialUrl } from "@/lib/site";
import { siteRoutes } from "@/lib/routes";

const NAV_LINKS = [
  { label: "Home", href: siteRoutes.home },
  { label: "Subscription Plans", href: siteRoutes.plans },
  { label: "Installation Guide", href: siteRoutes.installation },
  { label: "Reseller", href: siteRoutes.reseller },
  { label: "Contact", href: siteRoutes.contact },
];

const MENU_EASE = [0.16, 1, 0.3, 1] as const;

/** Two staggered pill lines — matches mobile menu design. */
function MobileMenuIcon({ open }: { open: boolean }) {
  if (open) {
    return <X className="h-6 w-6" strokeWidth={1.75} />;
  }

  return (
    <svg
      width="28"
      height="16"
      viewBox="0 0 28 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="text-[#0B0E2C]"
    >
      <path
        d="M1.25 1.25h17.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M9.25 14.75h17.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

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
          <div className="relative z-[80]">
            {/* Top bar — always a light glass pill */}
            <div className="relative glass-card bg-white/80">
              <nav
                aria-label="Main navigation"
                className="relative flex h-[60px] w-full items-center justify-between gap-4 px-5 sm:h-[72px] sm:px-8"
              >
                <Link
                  href={siteRoutes.home}
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
                    className="hidden rounded-[20px] bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white transition-opacity duration-150 hover:opacity-90 lg:inline-flex"
                  >
                    Get Started
                  </a>

                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-[20px] text-[#0B0E2C] transition-opacity hover:opacity-70 lg:hidden"
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileMenuOpen}
                    onClick={() => setMobileMenuOpen((open) => !open)}
                  >
                    <MobileMenuIcon open={mobileMenuOpen} />
                  </button>
                </div>
              </nav>
            </div>

            {/* Mobile menu panel — separate light glass card */}
            <AnimatePresence initial={false}>
              {mobileMenuOpen && (
                <motion.div
                  key="mobile-nav"
                  aria-label="Mobile navigation"
                  role="navigation"
                  initial={
                    reduceMotion
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: -14, scale: 0.96 }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={
                    reduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: -10, scale: 0.97 }
                  }
                  transition={{
                    duration: reduceMotion ? 0.12 : 0.48,
                    ease: MENU_EASE,
                  }}
                  className="absolute inset-x-0 top-[calc(100%+10px)] z-[85] origin-top overflow-hidden rounded-[28px] border border-white/70 bg-white/75 p-3 shadow-[0_16px_40px_rgba(11,14,44,0.12)] backdrop-blur-[14px] [-webkit-backdrop-filter:blur(14px)] lg:hidden"
                >
                  <div className="flex flex-col gap-1.5">
                    {NAV_LINKS.map((link, index) => {
                      const active = isActivePath(pathname, link.href);
                      return (
                        <motion.div
                          key={link.label}
                          initial={
                            reduceMotion ? false : { opacity: 0, y: 12 }
                          }
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: reduceMotion ? 0 : 0.4,
                            delay: reduceMotion ? 0 : 0.1 + index * 0.05,
                            ease: MENU_EASE,
                          }}
                        >
                          <Link
                            href={link.href}
                            onClick={closeMenu}
                            className={cn(
                              "flex items-center justify-between gap-3 rounded-[18px] px-4 py-3.5 text-[16px] font-semibold transition-colors",
                              active
                                ? "bg-[#E8EEFF] text-[#3B5BDB]"
                                : "bg-transparent text-[#0B0E2C] hover:bg-[#0B0E2C]/[0.04]",
                            )}
                          >
                            <span>{link.label}</span>
                            <ArrowUpRight
                              className={cn(
                                "h-4 w-4 shrink-0",
                                active ? "text-[#3B5BDB]" : "text-[#0B0E2C]/55",
                              )}
                              strokeWidth={2}
                              aria-hidden
                            />
                          </Link>
                        </motion.div>
                      );
                    })}

                    <motion.div
                      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.4,
                        delay: reduceMotion
                          ? 0
                          : 0.1 + NAV_LINKS.length * 0.05,
                        ease: MENU_EASE,
                      }}
                      className="pt-2"
                    >
                      <a
                        href={whatsappFreeTrialUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center rounded-[20px] bg-gradient-brand px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(123,47,255,0.25)]"
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
              duration: reduceMotion ? 0.1 : 0.4,
              ease: MENU_EASE,
            }}
            className="fixed inset-0 z-[70] bg-[#0B0E2C]/15 backdrop-blur-[1px] lg:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}
