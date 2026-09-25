"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { whatsappPlanEnquiryUrl } from "@/lib/site";
import {
  DEVICE_COUNTS,
  DURATION_LABELS,
  PLAN_DURATIONS,
  deviceRowLabel,
  formatGbp,
  priceMatrix,
  type PlanTier,
} from "@/lib/pricing";

function PricingTable({ tier }: { tier: PlanTier }) {
  const matrix = priceMatrix(tier);
  const accent = tier === "Standard" ? "#7B2FFF" : undefined;

  return (
    <div className="overflow-hidden glass-card">
      <div className="flex items-center justify-between gap-3 border-b border-[#0B0E2C]/10 px-4 py-3 sm:px-6 sm:py-4">
        <div>
          <h3 className="text-[16px] font-bold text-[#0B0E2C] sm:text-[18px]">
            {tier} pricing
          </h3>
          <p className="mt-0.5 text-[12px] text-[#5C607A] sm:text-[13px]">
            Total price for the full selected term
          </p>
        </div>
        <div
          className={cn(
            "h-1.5 w-16 rounded-full sm:w-20",
            tier === "Premium" && "bg-gradient-brand",
          )}
          style={accent ? { backgroundColor: accent } : undefined}
          aria-hidden
        />
      </div>

      <div className="relative">
        <p className="border-b border-[#0B0E2C]/8 px-4 py-2 text-[11px] text-[#5C607A] sm:hidden">
          Swipe sideways to see every duration →
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#0B0E2C]/10">
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#5C607A] sm:px-6 sm:py-4 sm:text-[12px]">
                  Simultaneous devices
                </th>
                {PLAN_DURATIONS.map((months) => (
                  <th
                    key={months}
                    className="px-3 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.06em] text-[#5C607A] sm:px-4 sm:py-4 sm:text-[12px]"
                  >
                    {DURATION_LABELS[months]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DEVICE_COUNTS.map((devices, rowIndex) => (
                <tr
                  key={devices}
                  className={cn(
                    "border-b border-[#0B0E2C]/8 last:border-b-0",
                    rowIndex % 2 === 1 && "bg-[rgba(11,14,44,0.02)]",
                  )}
                >
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-6 sm:py-3.5 sm:text-[14px]"
                  >
                    {deviceRowLabel(devices)}
                    {devices === 4 ? (
                      <span className="ml-1 text-[11px] font-medium text-[#5C607A]">
                        *
                      </span>
                    ) : null}
                  </th>
                  {PLAN_DURATIONS.map((months) => {
                    const amount = matrix[devices][months];
                    const price = formatGbp(amount);
                    return (
                      <td
                        key={months}
                        className="px-2 py-2.5 text-center sm:px-3 sm:py-3"
                      >
                        <a
                          href={whatsappPlanEnquiryUrl({
                            tier,
                            devices,
                            duration: DURATION_LABELS[months],
                            price,
                          })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-w-[4.5rem] flex-col items-center justify-center rounded-[14px] px-2 py-2 text-[#0B0E2C] transition-colors hover:bg-[rgba(123,47,255,0.08)] sm:min-w-[5.5rem]"
                        >
                          <span className="text-[14px] font-bold sm:text-[15px]">
                            {price}
                          </span>
                          <span className="mt-0.5 text-[10px] font-medium text-[#5C607A] sm:text-[11px]">
                            Select
                          </span>
                        </a>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="border-t border-[#0B0E2C]/10 px-4 py-3 text-[12px] leading-[1.55] text-[#5C607A] sm:px-6 sm:py-4 sm:text-[13px]">
        Prices are for the full selected term. Confirm availability, renewal
        terms and any separate player charge before payment. *4-device totals
        include the additional-connection rate used in the published matrix;
        confirm this option when ordering.
      </p>
    </div>
  );
}

export function PricingTablesSection() {
  const [tier, setTier] = useState<PlanTier>("Standard");

  return (
    <section
      id="pricing-tables"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Prices by Device Count and{" "}
            <span className="text-gradient-brand">Duration</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-[1.6] text-[#5C607A] sm:mt-5 sm:text-base sm:leading-[1.75]">
            Choose Standard or Premium, then compare total prices for 1–4
            simultaneous devices across 1, 3, 6 and 12 months.
          </p>
        </div>

        <div className="mt-5 flex justify-center sm:mt-8">
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
                      ? "bg-gradient-brand text-white"
                      : "text-[#5C607A] hover:text-[#0B0E2C]",
                  )}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-5 sm:mt-8">
          <PricingTable tier={tier} />
        </div>
      </Container>
    </section>
  );
}
