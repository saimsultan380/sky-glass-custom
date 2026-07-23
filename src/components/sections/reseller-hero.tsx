import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LayoutDashboard, CreditCard, HeadphonesIcon } from "lucide-react";
import { Container } from "@/components/layout/container";
import { MaskReveal } from "@/components/animation/mask-reveal";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const TRUST_ITEMS = [
  { label: "Professional Dashboard", icon: LayoutDashboard, color: "#FF6B2C" },
  { label: "Flexible Credits", icon: CreditCard, color: "#7B2FFF" },
  { label: "Reseller Support", icon: HeadphonesIcon, color: "#2563EB" },
] as const;

export function ResellerHero() {
  return (
    <section className="relative bg-white border-b border-[#0B0E2C]/10 pt-4 sm:pt-6">
      <Container className="pb-5 pt-2 sm:pb-12 sm:pt-8 lg:pb-16 lg:pt-12" animate={false}>
        <div className="grid items-center gap-4 sm:gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:gap-14">
          <div className="order-1 min-w-0">
            <MaskReveal
              as="h1"
              align="left"
              className="max-w-[640px] text-[24px] font-bold leading-[1.18] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] md:text-[42px] lg:text-[46px]"
            >
              Sky Glass IPTV Reseller UK –{" "}
              <span className="text-gradient-brand">Start and Grow Your IPTV Business</span>
            </MaskReveal>

            <ScrollReveal delay={0.28}>
              <div className="mt-3 max-w-[560px] space-y-2 text-[13px] leading-[1.55] text-[#5C607A] sm:mt-6 sm:space-y-3 sm:text-base sm:leading-[1.75]">
                <p>
                  Build and manage your own IPTV reseller business with the Sky Glass IPTV Reseller UK programme. Create customer accounts, activate subscriptions and monitor reseller credits through one organised dashboard.
                </p>
                <p>
                  Whether you are starting a new online venture or expanding an existing customer service, the reseller panel provides practical management tools and dedicated assistance for the UK market.
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-start sm:gap-4">
                <div className="flex w-full flex-col items-stretch gap-1.5 sm:w-auto sm:gap-2.5">
                  <Link
                    href="/contact-us"
                    className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-[8px] bg-gradient-brand px-4 py-2.5 text-[13px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:min-h-[48px] sm:px-6 sm:py-3 sm:text-[14px]"
                  >
                    Become a Sky Glass IPTV Reseller
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                <div className="flex w-full flex-col items-stretch gap-1.5 sm:w-auto sm:gap-2.5">
                  <Link
                    href="#packages"
                    className="border-gradient-brand inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-[8px] px-4 py-2.5 text-[13px] font-semibold text-[#0B0E2C] transition-opacity duration-150 hover:opacity-80 sm:min-h-[48px] sm:px-6 sm:py-3 sm:text-[14px] bg-white"
                  >
                    View Reseller Packages
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} className="order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] lg:max-w-none">
              <Image
                src="/hero.PNG"
                alt="Sky Glass IPTV Reseller Panel"
                width={1200}
                height={900}
                priority
                unoptimized
                className="mx-auto h-auto max-h-[260px] w-full object-contain object-center sm:max-h-none"
              />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.36} className="mt-4 sm:mt-10 lg:mt-14">
          <ul className="grid grid-cols-3 divide-x divide-[#0B0E2C]/10 overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white">
            {TRUST_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.label}
                  className="flex flex-col items-center justify-center gap-1 px-1.5 py-3 text-center sm:flex-row sm:gap-2.5 sm:px-5 sm:py-5 sm:text-left"
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
        </ScrollReveal>
      </Container>
    </section>
  );
}
