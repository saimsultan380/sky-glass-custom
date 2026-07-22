import Link from "next/link";
import { UserPlus, Package, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/container";

const TRUST_ITEMS = [
  { label: "Flexible Credits", icon: CheckCircle2, color: "#FF6B2C" },
  { label: "Simple Account Management", icon: CheckCircle2, color: "#E91E8C" },
  { label: "Dedicated Reseller Assistance", icon: CheckCircle2, color: "#7B2FFF" },
] as const;

export function ResellerCta() {
  return (
    <section
      id="reseller-cta"
      className="relative border-t border-[#0B0E2C]/10 bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="mx-auto max-w-5xl rounded-[16px] border border-[#0B0E2C]/10 bg-[#F8FAFC] px-6 py-12 text-center sm:px-10 sm:py-16">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C]">
            Get Started
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Start Your <span className="text-gradient-brand">Sky Glass IPTV</span> Reseller Business
          </h2>

          <div className="mx-auto mt-5 max-w-3xl space-y-4 text-[15px] leading-[1.75] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.8]">
            <p>
              The Sky Glass IPTV Reseller Panel gives you a practical way to manage customer subscriptions, reseller credits and account renewals through one professional dashboard.
            </p>
            <p>
              Choose a reseller package that matches your goals, receive panel access and begin building your own customer-facing business.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/contact-us"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[10px] bg-gradient-brand px-6 py-3 text-[14px] font-semibold text-white transition-opacity duration-150 hover:opacity-90"
            >
              <UserPlus className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
              Become a Sky Glass IPTV Reseller
            </Link>
            <Link
              href="#packages"
              className="border-gradient-brand inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-[14px] font-semibold text-[#0B0E2C] transition-opacity duration-150 hover:opacity-80 bg-white"
            >
              <Package
                className="h-4 w-4 shrink-0 text-[#E91E8C]"
                strokeWidth={2}
                aria-hidden
              />
              View Reseller Packages
            </Link>
          </div>

          <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
            <ul className="grid grid-cols-3 divide-x divide-[#0B0E2C]/10 overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white">
              {TRUST_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.label}
                    className="flex flex-col items-center justify-center gap-1.5 px-2 py-3.5 text-center sm:flex-row sm:gap-2.5 sm:px-5 sm:py-5 sm:text-left"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
                      style={{ color: item.color }}
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <span className="text-[10px] font-semibold leading-tight text-[#0B0E2C] sm:text-[15px]">
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
