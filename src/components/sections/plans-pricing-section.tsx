"use client";

import { useState } from "react";
import Link from "next/link";
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
    name: "1 MONTH PLAN",
    price: "9.99",
    suffix: "/1 month",
    features: STANDARD_FEATURES,
  },
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
];

const PREMIUM_PLANS: DurationPlan[] = [
  {
    name: "1 MONTH PLAN",
    price: "14.99",
    suffix: "/1 month",
    features: PREMIUM_FEATURES,
  },
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
];

export function PlansPricingSection() {
  const [planType, setPlanType] = useState<"Standard" | "Premium">("Standard");
  const plans = planType === "Standard" ? STANDARD_PLANS : PREMIUM_PLANS;

  return (
    <section
      id="plans"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-6 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-[20px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[48px]">
            Sky Glass IPTV
            <br className="hidden sm:block" />
            Subscription Plans
          </h2>
          <div className="mx-auto mt-3 space-y-1.5 text-[13px] leading-[1.55] text-[#5C607A] sm:mt-6 sm:max-w-3xl sm:space-y-3 sm:text-base sm:leading-[1.8]">
            <p>Choose between Standard and Premium subscription options.</p>
            <p>
              Package availability, content categories and supported features
              may vary according to the selected plan.
            </p>
          </div>
        </div>

        <div className="mt-4 flex justify-center sm:mt-10">
          <div className="inline-flex items-center rounded-full border border-[#0B0E2C]/10 bg-[#0B0E2C]/[0.02] p-1 sm:p-1.5">
            <button
              type="button"
              onClick={() => setPlanType("Standard")}
              className={cn(
                "rounded-full px-4 py-1.5 text-[12px] font-bold transition-all duration-200 sm:px-6 sm:py-2.5 sm:text-[14px]",
                planType === "Standard"
                  ? "bg-gradient-brand text-white shadow-sm"
                  : "text-[#5C607A] hover:text-[#0B0E2C]"
              )}
            >
              Standard
            </button>
            <button
              type="button"
              onClick={() => setPlanType("Premium")}
              className={cn(
                "rounded-full px-4 py-1.5 text-[12px] font-bold transition-all duration-200 sm:px-6 sm:py-2.5 sm:text-[14px]",
                planType === "Premium"
                  ? "bg-gradient-brand text-white shadow-sm"
                  : "text-[#5C607A] hover:text-[#0B0E2C]"
              )}
            >
              Premium
            </button>
          </div>
        </div>

        <div className="mx-auto mt-3 max-w-3xl text-center sm:mt-8">
          <p className="text-[13px] leading-[1.55] text-[#5C607A] sm:text-base sm:leading-[1.8]">
            {planType === "Standard"
              ? "The Standard plan is suitable for viewers who want a straightforward way to access available live television and on-demand entertainment."
              : "The Premium plan is designed for viewers who want broader entertainment access and enhanced viewing options."}
          </p>
        </div>

        <div className="mt-5 grid gap-2.5 sm:mt-12 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={`${planType}-${plan.name}`}
              className={cn(
                "group relative flex flex-col items-center overflow-hidden rounded-[8px] border bg-white p-3 text-center shadow-[0_4px_20px_rgba(11,14,44,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B0E2C]/20 hover:shadow-[0_8px_30px_rgba(11,14,44,0.08)] sm:p-8 lg:p-6 xl:p-8",
                plan.popular
                  ? "border-[#E91E8C]/40 ring-1 ring-[#E91E8C]/20"
                  : "border-[#0B0E2C]/10"
              )}
            >
              {plan.popular && (
                <span className="absolute right-2.5 top-2.5 rounded-[6px] bg-gradient-brand px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white sm:right-3 sm:top-3 sm:text-[10px]">
                  Most Popular
                </span>
              )}

              <h3 className="text-[14px] font-bold tracking-tight text-gradient-brand sm:text-[16px] xl:text-[18px]">
                {plan.name}
              </h3>
              <div className="mt-2 h-[2px] w-10 rounded-full bg-gradient-brand sm:mt-3 sm:h-[3px] sm:w-12" />

              <div className="mt-3 flex flex-col items-center sm:mt-8">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B0E2C] sm:text-[12px]">
                  Price
                </span>
                <div className="mt-1.5 flex items-baseline justify-center sm:mt-2">
                  <span className="text-[24px] font-bold leading-none tracking-tight text-gradient-brand sm:text-[36px] xl:text-[40px]">
                    £{plan.price}
                  </span>
                </div>
                <span className="mt-0.5 text-[12px] font-bold text-[#0B0E2C] sm:mt-1 sm:text-[13px]">
                  {plan.suffix}
                </span>
              </div>

              <hr className="my-3 w-full border-[#0B0E2C]/10 sm:my-6" />

              <div className="mb-2.5 w-full text-left text-[13px] font-bold text-[#0B0E2C] sm:mb-4 sm:text-[14px]">
                {planType} Plan Includes:
              </div>

              <ul className="flex w-full flex-1 flex-col items-start gap-1.5 text-left sm:gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-[12px] font-medium leading-snug text-[#0B0E2C] sm:gap-2.5 sm:text-[13px]"
                  >
                    <Check
                      className="mt-0.5 h-3 w-3 shrink-0 text-[#2563EB] sm:h-3.5 sm:w-3.5"
                      strokeWidth={3}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact-us"
                className="mt-4 inline-flex min-h-[40px] w-full items-center justify-center whitespace-nowrap rounded-[8px] bg-gradient-brand px-3 py-2 text-[11px] font-bold uppercase tracking-wide text-white transition-opacity duration-150 hover:opacity-90 sm:mt-8 sm:min-h-[44px] sm:px-4 sm:py-2.5 sm:text-[12px]"
              >
                Choose {planType} Plan
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
