"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { whatsappPlanEnquiryUrl } from "@/lib/site";
import {
  CATALOGUE_CATEGORIES,
  DEVICE_COUNTS,
  PRICING_TABLE_ROWS,
  accountLabel,
  formatGbp,
  publishedPlanAmount,
  streamLabel,
  type DeviceCount,
  type PlanDurationMonths,
  type PlanTier,
} from "@/lib/pricing";

function DurationPriceCard({
  accounts,
  months,
  features,
}: {
  accounts: DeviceCount;
  months: PlanDurationMonths;
  features: readonly string[];
}) {
  const [tier, setTier] = useState<PlanTier>("Standard");
  const reduceMotion = useReducedMotion();
  const row = PRICING_TABLE_ROWS.find((item) => item.months === months)!;
  const amount = publishedPlanAmount(accounts, months, tier);
  const duration = row.label;
  const isBest = months === 12;
  const display = formatGbp(amount);

  return (
    <article
      className={cn(
        "group relative mx-auto flex w-full max-w-[320px] flex-col overflow-hidden glass-card card-hover-lift px-5 py-6 hover:-translate-y-1 sm:max-w-none sm:px-5 sm:py-7",
        isBest && "ring-1 ring-[#E91E8C]/25",
      )}
    >
      {isBest ? (
        <span className="absolute right-2 top-2 rounded-[20px] bg-gradient-brand px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white sm:right-2.5 sm:top-2.5 sm:text-[11px]">
          Best value
        </span>
      ) : null}

      <div className="text-center">
        <h4 className="text-[15px] font-bold uppercase tracking-tight text-gradient-brand sm:text-[16px]">
          {months === 1 ? "1 Month" : `${months} Months`}
        </h4>
        <p className="mt-1 text-[12px] font-medium text-[#5C607A]">
          Full amount payable
        </p>
      </div>

      <div
        className="relative mx-auto mt-4 inline-flex w-full max-w-[240px] items-center justify-center glass-card p-1"
        role="tablist"
        aria-label={`${duration} plan tier`}
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
                "relative z-[1] flex-1 rounded-[16px] px-2.5 py-2 text-[11px] font-bold transition-colors duration-300 sm:px-3 sm:text-[12px]",
                active
                  ? "text-white"
                  : "text-[#5C607A] hover:text-[#0B0E2C]",
              )}
            >
              {active && (
                <motion.span
                  layoutId={
                    reduceMotion ? undefined : `plans-card-tier-${months}`
                  }
                  className="absolute inset-0 -z-[1] rounded-[16px] bg-gradient-brand shadow-[0_3px_10px_rgba(123,47,255,0.25)]"
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

      <div className="mt-5 border-t border-[#0B0E2C]/10 pt-5 text-center">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#5C607A]">
          {tier}
        </span>
        <div className="mt-1 text-[32px] font-bold leading-none tracking-tight text-gradient-brand sm:text-[36px]">
          {formatGbp(amount)}
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

      <div className="mt-5 flex justify-center">
        <a
          href={whatsappPlanEnquiryUrl({
            tier,
            devices: accounts,
            duration,
            price: display,
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
}

export function PricingTablesSection() {
  const [accounts, setAccounts] = useState<DeviceCount>(1);
  const reduceMotion = useReducedMotion();
  const features = [streamLabel(accounts), ...CATALOGUE_CATEGORIES];

  return (
    <section
      id="pricing-tables"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Compare subscription{" "}
            <span className="text-gradient-brand">prices</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-[1.6] text-[#5C607A] sm:mt-5 sm:text-base sm:leading-[1.75]">
            The listed amounts are for the entire stated subscription period,
            not monthly instalments. Ask support for the current one-month
            prices before ordering.
          </p>
        </div>

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
                        reduceMotion ? undefined : "plans-account-tab-pill"
                      }
                      className="absolute inset-0 -z-[1] rounded-[20px] bg-gradient-brand shadow-[0_4px_14px_rgba(123,47,255,0.28)]"
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                    />
                  )}
                  {accountLabel(count)}
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
            Full amount payable for the selected term. Use the Standard or
            Premium toggle on each card to update its price.
            {accounts === 4
              ? " The 4-account total includes the additional-connection rate."
              : ""}
          </p>
        </motion.div>

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
          {PRICING_TABLE_ROWS.map((row) => (
            <DurationPriceCard
              key={`${accounts}-${row.months}`}
              accounts={accounts}
              months={row.months}
              features={features}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
