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
  CATALOGUE_CATEGORIES,
  SUBSCRIPTION_TERMS,
  formatGbp,
  type PlanTier,
} from "@/lib/pricing";

export function PlansPricingSection() {
  const [tier, setTier] = useState<PlanTier>("Standard");
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="plans"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-[26px] leading-[1.2] font-bold tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Sky Glass IPTV Subscription{" "}
            <span className="text-gradient-brand">Pricing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.8]">
            Choose a duration below. Each card lists the same catalogue
            categories; the subscription period changes how long your access
            lasts. Standard and Premium can differ in the breadth of content and
            available features, so confirm the current package details before
            ordering.
          </p>
        </div>

        <div className="mt-5 flex justify-center sm:mt-10">
          <div
            className="glass-card relative inline-flex items-center p-1.5 sm:p-2"
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
                      : "text-[#5C607A] hover:text-[#0B0E2C]"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId={reduceMotion ? undefined : "home-tier-tab-pill"}
                      className="bg-gradient-brand absolute inset-0 -z-[1] rounded-[20px] shadow-[0_4px_14px_rgba(123,47,255,0.28)]"
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
            Full amount payable for the selected term.
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
          {SUBSCRIPTION_TERMS.map((term) => {
            const amount = tier === "Standard" ? term.standard : term.premium;
            const isBest = term.months === 12;
            const priceText = formatGbp(amount);

            return (
              <article
                key={`${tier}-${term.months}`}
                className={cn(
                  "group glass-card card-hover-lift relative mx-auto flex w-full max-w-[320px] flex-col overflow-hidden px-5 py-6 hover:-translate-y-1 sm:max-w-none sm:px-5 sm:py-7",
                  isBest && "ring-1 ring-[#E91E8C]/25"
                )}
              >
                {isBest ? (
                  <span className="bg-gradient-brand absolute top-2 right-2 rounded-[20px] px-2 py-1 text-[10px] font-bold tracking-wide text-white uppercase sm:top-2.5 sm:right-2.5 sm:text-[11px]">
                    Best value
                  </span>
                ) : null}

                <div className="text-center">
                  <h4 className="text-gradient-brand text-[15px] font-bold tracking-tight uppercase sm:text-[16px]">
                    {term.label}
                  </h4>
                  <p className="mt-1 text-[12px] font-medium text-[#5C607A]">
                    Duration: {term.access}
                  </p>
                </div>

                <div className="mt-5 border-t border-[#0B0E2C]/10 pt-5 text-center">
                  <span className="text-[11px] font-bold tracking-wider text-[#5C607A] uppercase">
                    {tier}
                  </span>
                  <div className="text-gradient-brand mt-1 text-[32px] leading-none font-bold tracking-tight sm:text-[36px]">
                    {formatGbp(amount)}
                  </div>
                </div>

                <hr className="my-4 w-full border-[#0B0E2C]/10" />

                <p className="mb-2 text-left text-[12px] font-bold tracking-wider text-[#5C607A] uppercase">
                  Catalogue categories
                </p>
                <ul className="flex w-full flex-1 flex-col items-start gap-2 text-left">
                  {CATALOGUE_CATEGORIES.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-[12px] leading-snug font-medium text-[#0B0E2C] sm:text-[13px]"
                    >
                      <Check
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2563EB]"
                        strokeWidth={3}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-left text-[12px] leading-[1.55] text-[#5C607A] sm:text-[13px]">
                  {term.note}
                </p>

                <div className="mt-5 flex justify-center">
                  <a
                    href={whatsappPlanEnquiryUrl({
                      tier,
                      devices: 1,
                      duration: term.access,
                      price: priceText,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-brand inline-flex min-h-[42px] w-auto items-center justify-center rounded-[20px] px-5 py-2 text-[12px] font-bold tracking-wide text-white uppercase transition-opacity duration-150 hover:opacity-90 sm:min-h-[44px] sm:px-6 sm:text-[13px]"
                  >
                    {term.ctaLabel}
                  </a>
                </div>
              </article>
            );
          })}
        </motion.div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-[13px] leading-[1.6] text-[#5C607A] sm:mt-8 sm:text-[14px]">
          The list describes catalogue categories, not a guarantee that a
          particular channel, title, event or programme-guide entry will always
          be available. Check specific requirements with support. Confirm the
          number of simultaneous connections for the plan you choose.
        </p>

        <div className="mt-5 flex justify-center sm:mt-8">
          <Link
            href={siteRoutes.plans}
            className="border-gradient-brand inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[20px] px-6 py-2.5 text-[13px] font-semibold sm:min-h-[48px] sm:text-[14px]"
          >
            <span className="text-gradient-brand">Compare Plans in Detail</span>
            <ArrowRight
              className="h-4 w-4 text-[#7B2FFF]"
              strokeWidth={2}
              aria-hidden
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
