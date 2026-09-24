"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { whatsappSubscriptionUrl } from "@/lib/site";

type DurationPlan = {
  name: string;
  price: string;
  suffix: string;
  features: readonly string[];
  popular?: boolean;
};

type PricingCopy = {
  titleBefore: string;
  titleHighlight: string;
  intro: readonly string[];
  standardLabel: string;
  premiumLabel: string;
  standardDescription: string;
  premiumDescription: string;
  standardFeatures: readonly string[];
  premiumFeatures: readonly string[];
  includesLabel: (planType: "Standard" | "Premium") => string;
  ctaLabel: (planType: "Standard" | "Premium") => string;
};

/** Homepage pricing copy — keep separate from the plans page. */
const HOME_COPY: PricingCopy = {
  titleBefore: "Sky Glass IPTV",
  titleHighlight: "Subscription Plans",
  intro: [
    "Choose your subscription duration and compare the Standard and Premium options below.",
  ],
  standardLabel: "Standard",
  premiumLabel: "Premium",
  standardDescription:
    "Access available live television and on-demand entertainment with setup guidance and customer assistance.",
  premiumDescription:
    "Explore a broader entertainment selection, with expanded live television access and a larger movies and series library.",
  standardFeatures: [
    "Available live television",
    "Sports channels where included",
    "Movies and series",
    "Electronic Programme Guide support",
    "Popular device compatibility",
    "Installation instructions",
    "Customer assistance",
    "Quick activation",
  ],
  premiumFeatures: [
    "Expanded live television access",
    "Available sports and event coverage",
    "A larger movies and series library",
    "Electronic Programme Guide support",
    "Catch-Up functionality where available",
    "HD, Full HD and 4K options where supported",
    "Popular device compatibility",
    "Setup assistance",
    "Quick activation",
  ],
  includesLabel: (planType) => `The ${planType} Plan Includes:`,
  ctaLabel: (planType) => `Choose ${planType} Plan`,
};

/** Subscription plans page pricing copy. */
const PLANS_PAGE_COPY: PricingCopy = {
  titleBefore: "Sky Glass IPTV",
  titleHighlight: "Subscription Plans",
  intro: [
    "Choose your subscription duration and compare the Standard and Premium options below.",
  ],
  standardLabel: "Standard",
  premiumLabel: "Premium",
  standardDescription:
    "Access available live television and on-demand entertainment with setup guidance and customer assistance.",
  premiumDescription:
    "Explore a broader entertainment selection, with expanded live television access and a larger movies and series library.",
  standardFeatures: [
    "Available live television",
    "Sports channels where included",
    "Movies and series",
    "Electronic Programme Guide support",
    "Popular device compatibility",
    "Installation instructions",
    "Customer assistance",
    "Quick activation",
  ],
  premiumFeatures: [
    "Expanded live television access",
    "Available sports and event coverage",
    "A larger movies and series library",
    "Electronic Programme Guide support",
    "Catch-Up functionality where available",
    "HD, Full HD and 4K options where supported",
    "Popular device compatibility",
    "Setup assistance",
    "Quick activation",
  ],
  includesLabel: (planType) => `The ${planType} Plan Includes:`,
  ctaLabel: (planType) => `Choose ${planType} Plan`,
};

const STANDARD_PRICES = [
  { name: "3 MONTHS PLAN", price: "20", suffix: "/3 months" },
  { name: "6 MONTHS PLAN", price: "30", suffix: "/6 months" },
  { name: "12 MONTHS PLAN", price: "40", suffix: "/12 months" },
  {
    name: "24 MONTHS PLAN",
    price: "70",
    suffix: "/24 months",
    popular: true,
  },
] as const;

const PREMIUM_PRICES = [
  { name: "3 MONTHS PLAN", price: "25", suffix: "/3 months" },
  { name: "6 MONTHS PLAN", price: "35", suffix: "/6 months" },
  { name: "12 MONTHS PLAN", price: "55", suffix: "/12 months" },
  {
    name: "24 MONTHS PLAN",
    price: "90",
    suffix: "/24 months",
    popular: true,
  },
] as const;

type PlansPricingSectionProps = {
  /** `home` = homepage copy; `plans` = subscription plans page copy. */
  variant?: "home" | "plans";
};

export function PlansPricingSection({
  variant = "home",
}: PlansPricingSectionProps) {
  const [planType, setPlanType] = useState<"Standard" | "Premium">("Standard");
  const reduceMotion = useReducedMotion();
  const copy = variant === "plans" ? PLANS_PAGE_COPY : HOME_COPY;

  const plans: DurationPlan[] = (
    planType === "Standard" ? STANDARD_PRICES : PREMIUM_PRICES
  ).map((plan) => ({
    ...plan,
    features:
      planType === "Standard"
        ? copy.standardFeatures
        : copy.premiumFeatures,
  }));

  const planHeading =
    planType === "Standard"
      ? variant === "plans"
        ? "Standard Sky Glass IPTV Plan"
        : "Standard Plan"
      : variant === "plans"
        ? "Premium Sky Glass IPTV Plan"
        : "Premium Plan";

  const description =
    planType === "Standard"
      ? copy.standardDescription
      : copy.premiumDescription;

  return (
    <section
      id="plans"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[50px]">
            {copy.titleBefore}{" "}
            <span className="text-gradient-brand">{copy.titleHighlight}</span>
          </h2>
          <div className="mx-auto mt-4 space-y-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:max-w-3xl sm:space-y-3 sm:text-base sm:leading-[1.8]">
            {copy.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center sm:mt-10">
          <div
            className="relative inline-flex items-center glass-card p-1.5 sm:p-2"
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
                    "relative z-[1] min-w-[120px] rounded-[20px] px-6 py-3 text-[14px] font-bold transition-colors duration-300 sm:min-w-[150px] sm:px-10 sm:py-3.5 sm:text-[16px]",
                    active
                      ? "text-white"
                      : "text-[#5C607A] hover:text-[#0B0E2C]",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId={
                        reduceMotion
                          ? undefined
                          : `plan-type-pill-${variant}`
                      }
                      className="absolute inset-0 -z-[1] rounded-[20px] bg-gradient-brand shadow-[0_4px_14px_rgba(123,47,255,0.28)]"
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                    />
                  )}
                  {type === "Standard"
                    ? copy.standardLabel
                    : copy.premiumLabel}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          key={`${variant}-${planType}-intro`}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.28,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mx-auto mt-3 max-w-3xl text-center sm:mt-8"
        >
          <h3 className="text-[16px] font-bold tracking-tight text-[#0B0E2C] sm:text-[20px]">
            {planHeading}
          </h3>
          <p className="mt-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-3 sm:text-base sm:leading-[1.8]">
            {description}
          </p>
          <p className="mt-3 text-[12px] font-semibold uppercase tracking-wider text-[#0B0E2C] sm:mt-4 sm:text-[13px]">
            Available Durations
          </p>
        </motion.div>

        <motion.div
          key={`${variant}-plans-${planType}`}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.32,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mx-auto mt-6 grid max-w-[360px] gap-4 sm:mt-12 sm:max-w-[760px] sm:grid-cols-2 sm:gap-5 lg:max-w-[1200px] lg:grid-cols-4 lg:gap-5"
        >
          {plans.map((plan) => {
            return (
              <article
                key={`${planType}-${plan.name}`}
                className={cn(
                  "group relative mx-auto flex w-full max-w-[320px] flex-col items-center overflow-hidden glass-card card-hover-lift px-5 py-6 text-center hover:-translate-y-1 sm:max-w-[340px] sm:px-5 sm:py-7 lg:max-w-[290px] lg:px-5 lg:py-7",
                  plan.popular && "ring-1 ring-[#E91E8C]/25",
                )}
              >
                {plan.popular && (
                  <span className="absolute right-2 top-2 rounded-[20px] bg-gradient-brand px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white sm:right-2.5 sm:top-2.5 sm:text-[11px]">
                    Recommended
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
                      £{plan.price}
                    </span>
                  </div>
                  <span className="mt-1.5 text-[13px] font-bold text-[#0B0E2C] sm:text-[14px]">
                    {plan.suffix}
                  </span>
                </div>

                <hr className="my-4 w-full border-[#0B0E2C]/10 sm:my-5" />

                <div className="mb-3 w-full text-left text-[14px] font-bold text-[#0B0E2C] sm:mb-3.5 sm:text-[15px]">
                  {copy.includesLabel(planType)}
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

                <a
                  href={whatsappSubscriptionUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center whitespace-nowrap rounded-[20px] bg-gradient-brand px-3 py-2.5 text-[12px] font-bold uppercase tracking-wide text-white transition-opacity duration-150 hover:opacity-90 sm:mt-6 sm:min-h-[48px] sm:text-[13px]"
                >
                  {copy.ctaLabel(planType)}
                </a>
              </article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
