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
  DURATION_LABELS,
  PLAN_DURATIONS,
  PREMIUM_MATRIX,
  STANDARD_MATRIX,
  type PlanDurationMonths,
  type PlanTier,
} from "@/lib/pricing";

const SHARED_FEATURES = [
  "1 account — 1 simultaneous stream",
  "Available live TV and sports where included",
  "Movies and series library",
  "EPG support where available",
  "Compatible devices with setup guidance",
] as const;

export function PlansPricingSection() {
  const [tier, setTier] = useState<PlanTier>("Standard");
  const reduceMotion = useReducedMotion();
  const matrix = tier === "Standard" ? STANDARD_MATRIX : PREMIUM_MATRIX;

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
            Choose Standard or Premium, then compare prices by subscription
            length. View the full Pricing page for every simultaneous-device
            option.
          </p>
        </div>

        <div className="mt-5 flex justify-center sm:mt-10">
          <div
            className="relative inline-flex items-center glass-card p-1.5 sm:p-2"
            role="tablist"
            aria-label="Plan tier"
          >
            {(["Standard", "Premium"] as const).map((type) => {
              const active = tier === type;
              return (
                <button
                  key={type}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setTier(type)}
                  className={cn(
                    "relative z-[1] min-w-[120px] rounded-[20px] px-6 py-3 text-[14px] font-bold transition-colors duration-300 sm:min-w-[150px] sm:px-10 sm:py-3.5 sm:text-[16px]",
                    active
                      ? "text-white"
                      : "text-[#5C607A] hover:text-[#0B0E2C]",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId={
                        reduceMotion ? undefined : "home-tier-tab-pill"
                      }
                      className="absolute inset-0 -z-[1] rounded-[20px] bg-gradient-brand shadow-[0_4px_14px_rgba(123,47,255,0.28)]"
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                    />
                  )}
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          key={`heading-${tier}`}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.28,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mx-auto mt-5 max-w-3xl text-center sm:mt-8"
        >
          <h3 className="text-[22px] font-bold tracking-tight text-[#0B0E2C] sm:text-[28px]">
            {tier} plans
          </h3>
          <p className="mt-2 text-[13px] leading-[1.6] text-[#5C607A] sm:text-[15px]">
            Full amount payable for the selected term. Prices below are for one
            simultaneous stream.
          </p>
        </motion.div>

        <motion.div
          key={`cards-${tier}`}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.32,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mx-auto mt-6 grid max-w-[360px] gap-4 sm:mt-10 sm:max-w-[760px] sm:grid-cols-2 sm:gap-5 lg:max-w-[1200px] lg:grid-cols-4 lg:gap-5"
        >
          {PLAN_DURATIONS.map((months: PlanDurationMonths) => {
            const price = matrix[1][months];
            const duration = DURATION_LABELS[months];
            const isBest = months === 12;

            return (
              <article
                key={`${tier}-${months}`}
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

                <div className="mt-5 border-t border-[#0B0E2C]/10 pt-5 text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5C607A]">
                    {tier}
                  </span>
                  <div className="mt-1 text-[32px] font-bold leading-none tracking-tight text-gradient-brand sm:text-[36px]">
                    £{price}
                  </div>
                </div>

                <hr className="my-4 w-full border-[#0B0E2C]/10" />

                <ul className="flex w-full flex-1 flex-col items-start gap-2 text-left">
                  {SHARED_FEATURES.map((feature) => (
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

                <div className="mt-5 flex justify-center">
                  <a
                    href={whatsappPlanEnquiryUrl({
                      tier,
                      devices: 1,
                      duration,
                      price: `£${price}`,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[42px] w-auto items-center justify-center rounded-[20px] bg-gradient-brand px-5 py-2 text-[12px] font-bold uppercase tracking-wide text-white transition-opacity duration-150 hover:opacity-90 sm:min-h-[44px] sm:px-6 sm:text-[13px]"
                  >
                    Choose {tier}
                  </a>
                </div>
              </article>
            );
          })}
        </motion.div>

        <div className="mt-6 flex flex-col items-center gap-3 sm:mt-10">
          <p className="max-w-2xl text-center text-[13px] leading-[1.55] text-[#5C607A] sm:text-[14px]">
            Prefer pricing for 2, 3 or 4 simultaneous streams? Open the full
            Pricing page.
          </p>
          <Link
            href={siteRoutes.plans}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[20px] border-gradient-brand px-6 py-2.5 text-[13px] font-semibold sm:min-h-[48px] sm:text-[14px]"
          >
            <span className="text-gradient-brand">View full Pricing</span>
            <ArrowRight className="h-4 w-4 text-[#7B2FFF]" strokeWidth={2} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
