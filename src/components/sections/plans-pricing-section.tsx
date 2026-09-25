"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { whatsappPlanEnquiryUrl } from "@/lib/site";
import { siteRoutes } from "@/lib/routes";
import {
  DEVICE_COUNTS,
  DURATION_LABELS,
  PLAN_DURATIONS,
  PREMIUM_MATRIX,
  STANDARD_MATRIX,
  type DeviceCount,
  type PlanDurationMonths,
} from "@/lib/pricing";

function accountLabel(count: DeviceCount, short = false): string {
  if (short) return count === 1 ? "1 Account" : `${count} Accounts`;
  return count === 1 ? "1 Account" : `${count} Accounts`;
}

function streamLabel(count: DeviceCount): string {
  if (count === 1) {
    return "1 account — 1 simultaneous stream";
  }
  return `${count} accounts — ${count} simultaneous streams`;
}

const SHARED_FEATURES = [
  "Available live TV and sports where included",
  "Movies and series library",
  "EPG support where available",
  "Compatible devices with setup guidance",
] as const;

export function PlansPricingSection() {
  const [accounts, setAccounts] = useState<DeviceCount>(1);
  const reduceMotion = useReducedMotion();

  const features = [streamLabel(accounts), ...SHARED_FEATURES];

  return (
    <section
      id="plans"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[50px]">
            Sky Glass IPTV{" "}
            <span className="text-gradient-brand">Subscription Plans</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.8]">
            Choose how many screens can stream at the same time, then compare
            Standard and Premium prices by subscription length. View the full
            Pricing page for the complete device table.
          </p>
        </div>

        {/* Account tabs — 1 to 4 */}
        <div className="mt-5 flex justify-center sm:mt-10">
          <div
            className="inline-flex max-w-full flex-wrap items-center justify-center gap-1 glass-card p-1.5 sm:gap-0 sm:p-2"
            role="tablist"
            aria-label="Simultaneous accounts"
          >
            {DEVICE_COUNTS.map((count) => {
              const active = accounts === count;
              return (
                <button
                  key={count}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setAccounts(count)}
                  className={cn(
                    "relative z-[1] rounded-[20px] px-3 py-2.5 text-[12px] font-bold transition-colors duration-300 sm:min-w-[110px] sm:px-5 sm:py-3 sm:text-[14px]",
                    active
                      ? "text-white"
                      : "text-[#5C607A] hover:text-[#0B0E2C]",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId={
                        reduceMotion ? undefined : "home-account-tab-pill"
                      }
                      className="absolute inset-0 -z-[1] rounded-[20px] bg-gradient-brand shadow-[0_4px_14px_rgba(123,47,255,0.28)]"
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                    />
                  )}
                  {accountLabel(count, true)}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          key={`heading-${accounts}`}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.28,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mx-auto mt-5 max-w-3xl text-center sm:mt-8"
        >
          <h3 className="text-[22px] font-bold tracking-tight text-[#0B0E2C] sm:text-[28px]">
            {accountLabel(accounts)}
          </h3>
          <p className="mt-2 text-[13px] leading-[1.6] text-[#5C607A] sm:text-[15px]">
            Full amount payable for the selected term. Prices below show
            Standard and Premium for this account count.
          </p>
        </motion.div>

        {/* Month cards */}
        <motion.div
          key={`cards-${accounts}`}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.32,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mx-auto mt-6 grid max-w-[360px] gap-4 sm:mt-10 sm:max-w-[760px] sm:grid-cols-2 sm:gap-5 lg:max-w-[1200px] lg:grid-cols-4 lg:gap-5"
        >
          {PLAN_DURATIONS.map((months: PlanDurationMonths) => {
            const standardPrice = STANDARD_MATRIX[accounts][months];
            const premiumPrice = PREMIUM_MATRIX[accounts][months];
            const duration = DURATION_LABELS[months];
            const isBest = months === 12;

            return (
              <article
                key={`${accounts}-${months}`}
                className={cn(
                  "group relative mx-auto flex w-full max-w-[320px] flex-col overflow-hidden glass-card card-hover-lift px-5 py-6 hover:-translate-y-1 sm:max-w-none sm:px-5 sm:py-7",
                  isBest && "ring-1 ring-[#E91E8C]/25",
                )}
              >
                {isBest && (
                  <span className="absolute right-2 top-2 rounded-[20px] bg-gradient-brand px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white sm:right-2.5 sm:top-2.5 sm:text-[11px]">
                    Best value
                  </span>
                )}

                <div className="text-center">
                  <h4 className="text-[15px] font-bold uppercase tracking-tight text-gradient-brand sm:text-[16px]">
                    {months === 1 ? "1 Month" : `${months} Months`}
                  </h4>
                  <p className="mt-1 text-[12px] font-medium text-[#5C607A]">
                    Full amount payable
                  </p>
                </div>

                <div className="mt-5 space-y-3 border-t border-[#0B0E2C]/10 pt-5">
                  <div className="text-center">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#5C607A]">
                      Standard
                    </span>
                    <div className="mt-1 text-[32px] font-bold leading-none tracking-tight text-gradient-brand sm:text-[36px]">
                      £{standardPrice}
                    </div>
                    <a
                      href={whatsappPlanEnquiryUrl({
                        tier: "Standard",
                        devices: accounts,
                        duration,
                        price: `£${standardPrice}`,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-[42px] w-full items-center justify-center rounded-[20px] bg-gradient-brand px-3 py-2 text-[12px] font-bold uppercase tracking-wide text-white transition-opacity duration-150 hover:opacity-90 sm:min-h-[44px] sm:text-[13px]"
                    >
                      Choose Standard
                    </a>
                  </div>

                  <div className="text-center border-t border-[#0B0E2C]/08 pt-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#5C607A]">
                      Premium
                    </span>
                    <div className="mt-1 text-[24px] font-bold leading-none tracking-tight text-[#0B0E2C] sm:text-[26px]">
                      £{premiumPrice}
                    </div>
                    <a
                      href={whatsappPlanEnquiryUrl({
                        tier: "Premium",
                        devices: accounts,
                        duration,
                        price: `£${premiumPrice}`,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-[42px] w-full items-center justify-center rounded-[20px] border-gradient-brand px-3 py-2 text-[12px] font-bold uppercase tracking-wide text-white transition-opacity duration-150 hover:opacity-90 sm:min-h-[44px] sm:text-[13px]"
                    >
                      Choose Premium
                    </a>
                  </div>
                </div>

                <hr className="my-4 w-full border-[#0B0E2C]/10" />

                <ul className="flex w-full flex-1 flex-col items-start gap-2 text-left">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-[12px] font-medium leading-snug text-[#0B0E2C] sm:text-[13px]"
                    >
                      <Check
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2563EB]"
                        strokeWidth={3}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </motion.div>

        <div className="mt-6 flex flex-col items-center gap-3 sm:mt-10">
          <p className="max-w-2xl text-center text-[13px] leading-[1.55] text-[#5C607A] sm:text-[14px]">
            Prefer a table view of every device and term? Open the full Pricing
            page.
          </p>
          <Link
            href={siteRoutes.plans}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[20px] border-gradient-brand px-6 py-2.5 text-[13px] font-semibold text-white sm:min-h-[48px] sm:text-[14px]"
          >
            View full Pricing
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
