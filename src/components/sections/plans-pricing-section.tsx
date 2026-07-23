"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type DurationPlan = {
  name: string;
  price: string;
  suffix: string;
  features: readonly string[];
  popular?: boolean;
};

const STANDARD_FEATURES = [
  "Available live television categories",
  "Sports channels where included",
  "Movies and television series",
  "Electronic Programme Guide support",
  "Compatible IPTV applications",
  "Popular device support",
  "Setup instructions",
  "Customer assistance",
  "Quick activation",
] as const;

const PREMIUM_FEATURES = [
  "Expanded live television access",
  "Available sports and event coverage",
  "A larger movies and series library",
  "Electronic Programme Guide support",
  "Catch-Up functionality where available",
  "HD, Full HD and 4K options where supported",
  "Popular device compatibility",
  "Setup assistance",
  "Quick activation",
] as const;

const STANDARD_PLANS: DurationPlan[] = [
  {
    name: "3 MONTHS PLAN",
    price: "24.99",
    suffix: "/3 months",
    features: STANDARD_FEATURES,
  },
  {
    name: "6 MONTHS PLAN",
    price: "39.99",
    suffix: "/6 months",
    features: STANDARD_FEATURES,
    popular: true,
  },
  {
    name: "12 MONTHS PLAN",
    price: "59.99",
    suffix: "/12 months",
    features: STANDARD_FEATURES,
  },
  {
    name: "24 MONTHS PLAN",
    price: "TBC",
    suffix: "/24 months",
    features: STANDARD_FEATURES,
  },
];

const PREMIUM_PLANS: DurationPlan[] = [
  {
    name: "3 MONTHS PLAN",
    price: "34.99",
    suffix: "/3 months",
    features: PREMIUM_FEATURES,
  },
  {
    name: "6 MONTHS PLAN",
    price: "54.99",
    suffix: "/6 months",
    features: PREMIUM_FEATURES,
    popular: true,
  },
  {
    name: "12 MONTHS PLAN",
    price: "84.99",
    suffix: "/12 months",
    features: PREMIUM_FEATURES,
  },
  {
    name: "24 MONTHS PLAN",
    price: "TBC",
    suffix: "/24 months",
    features: PREMIUM_FEATURES,
  },
];

export function PlansPricingSection() {
  const [planType, setPlanType] = useState<"Standard" | "Premium">("Standard");
  const reduceMotion = useReducedMotion();
  const plans = planType === "Standard" ? STANDARD_PLANS : PREMIUM_PLANS;

  return (
    <section
      id="plans"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[50px]">
            Available{" "}
            <span className="text-gradient-brand">Subscription Plans</span>
          </h2>
          <div className="mx-auto mt-4 space-y-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:max-w-3xl sm:space-y-3 sm:text-base sm:leading-[1.8]">
            <p>Choose between Standard and Premium subscription options.</p>
            <p>
              Package availability, content categories and supported features
              may vary according to the selected plan.
            </p>
          </div>
        </div>

        <div className="mt-4 flex justify-center sm:mt-10">
          <div
            className="relative inline-flex items-center rounded-[1px] bg-[#0B0E2C]/[0.04] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-xl backdrop-saturate-150 sm:p-2"
            role="tablist"
            aria-label="Plan type"
          >
            {(["Standard", "Premium"] as const).map((type) => {
              const active = planType === type;
              return (
                <button
                  key={type}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setPlanType(type)}
                  className={cn(
                    "relative z-[1] min-w-[120px] rounded-[1px] px-6 py-3 text-[14px] font-bold transition-colors duration-300 sm:min-w-[150px] sm:px-10 sm:py-3.5 sm:text-[16px]",
                    active
                      ? "text-white"
                      : "text-[#5C607A] hover:text-[#0B0E2C]",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId={reduceMotion ? undefined : "plan-type-pill"}
                      className="absolute inset-0 -z-[1] rounded-[1px] bg-gradient-brand shadow-[0_4px_14px_rgba(123,47,255,0.28)]"
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
          key={planType}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.28,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mx-auto mt-3 max-w-3xl text-center sm:mt-8"
        >
          <p className="text-[14px] leading-[1.6] text-[#5C607A] sm:text-base sm:leading-[1.8]">
            {planType === "Standard"
              ? "The Standard plan is suitable for viewers who want a straightforward way to access available live television and on-demand entertainment."
              : "The Premium plan is designed for viewers who want broader entertainment access and enhanced viewing options."}
          </p>
        </motion.div>

        <motion.div
          key={`plans-${planType}`}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.32,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mx-auto mt-6 grid max-w-[360px] gap-4 sm:mt-12 sm:max-w-[760px] sm:gap-5 sm:grid-cols-2 lg:max-w-[1200px] lg:grid-cols-4 lg:gap-5"
        >
          {plans.map((plan, index) => {
            const accent =
              plan.popular
                ? "#E91E8C"
                : (["#FF6B2C", "#7B2FFF", "#2563EB", "#FF6B2C"] as const)[
                    index % 4
                  ];

            return (
            <article
              key={`${planType}-${plan.name}`}
              className={cn(
                "group relative mx-auto flex w-full max-w-[320px] flex-col items-center overflow-hidden rounded-[1px] border bg-white px-5 py-6 text-center shadow-[var(--card-shadow)] card-hover-lift hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)] sm:max-w-[340px] sm:px-5 sm:py-7 lg:max-w-[290px] lg:px-5 lg:py-7",
                plan.popular
                  ? "border-[#E91E8C]/40 ring-1 ring-[#E91E8C]/20"
                  : "border-transparent"
              )}
              style={
                {
                  "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${accent}1A`,
                  "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${accent}33`,
                } as React.CSSProperties
              }
            >
              {plan.popular && (
                <span className="absolute right-2 top-2 rounded-[1px] bg-gradient-brand px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white sm:right-2.5 sm:top-2.5 sm:text-[11px]">
                  Most Popular
                </span>
              )}

              <h3 className="text-[15px] font-bold tracking-tight text-gradient-brand sm:text-[16px]">
                {plan.name}
              </h3>
              <div className="mt-2 h-[2px] w-10 rounded-full bg-gradient-brand sm:mt-2.5 sm:w-12" />

              <div className="mt-4 flex flex-col items-center sm:mt-5">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#0B0E2C] sm:text-[13px]">
                  Price
                </span>
                <div className="mt-1.5 flex items-baseline justify-center sm:mt-2">
                  <span className="text-[34px] font-bold leading-none tracking-tight text-gradient-brand sm:text-[38px]">
                    {plan.price === "TBC" ? "TBC" : `£${plan.price}`}
                  </span>
                </div>
                <span className="mt-1.5 text-[13px] font-bold text-[#0B0E2C] sm:text-[14px]">
                  {plan.suffix}
                </span>
              </div>

              <hr className="my-4 w-full border-[#0B0E2C]/10 sm:my-5" />

              <div className="mb-3 w-full text-left text-[14px] font-bold text-[#0B0E2C] sm:mb-3.5 sm:text-[15px]">
                The {planType} Plan Includes:
              </div>

              <ul className="flex w-full flex-1 flex-col items-start gap-2 text-left sm:gap-2.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-[13px] font-medium leading-snug text-[#0B0E2C] sm:text-[14px]"
                  >
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2563EB]"
                      strokeWidth={3}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact-us"
                className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center whitespace-nowrap rounded-[1px] bg-gradient-brand px-3 py-2.5 text-[12px] font-bold uppercase tracking-wide text-white transition-opacity duration-150 hover:opacity-90 sm:mt-6 sm:min-h-[48px] sm:text-[13px]"
              >
                Choose {planType} Plan
              </Link>
            </article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
