import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Headphones,
  Zap,
  Monitor,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { MaskReveal } from "@/components/animation/mask-reveal";

const TRUST_ITEMS = [
  { label: "Quick Responses", icon: Zap, color: "#FF6B2C" },
  { label: "Setup Assistance", icon: ShieldCheck, color: "#7B2FFF" },
  { label: "Popular Devices Supported", icon: Monitor, color: "#2563EB" },
] as const;

export function ContactHero() {
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
              Contact Sky Glass IPTV –{" "}
              <span className="text-gradient-brand">Request a Trial or Get Support</span>
            </MaskReveal>

            <FadeIn delay={0.2}>
              <div className="mt-3 max-w-[560px] space-y-2 text-[13px] leading-[1.55] text-[#5C607A] sm:mt-6 sm:space-y-3 sm:text-base sm:leading-[1.75]">
                <p>
                  Contact Sky Glass IPTV to request a 24-hour IPTV trial in the UK, compare subscription options or receive help setting up your device.
                </p>
                <p>
                  Tell us what you need assistance with and include your device and application details so the support team can provide relevant guidance.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.28}>
              <div className="mt-4 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-start sm:gap-4">
                <div className="flex w-full flex-col items-stretch gap-1.5 sm:w-auto sm:gap-2.5">
                  <Link
                    href="#contact-form"
                    className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-[8px] bg-gradient-brand px-4 py-2.5 text-[13px] font-semibold text-white sm:min-h-[48px] sm:px-6 sm:py-3 sm:text-[14px]"
                  >
                    <Clock className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                    Request Your 24-Hour Trial
                  </Link>
                </div>

                <div className="flex w-full flex-col items-stretch gap-1.5 sm:w-auto sm:gap-2.5">
                  <Link
                    href="#contact-form"
                    className="border-gradient-brand inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-[8px] px-4 py-2.5 text-[13px] font-semibold text-[#0B0E2C] sm:min-h-[48px] sm:px-6 sm:py-3 sm:text-[14px]"
                  >
                    <Headphones className="h-4 w-4 shrink-0 text-[#E91E8C]" strokeWidth={2} aria-hidden />
                    Contact Customer Support
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.08} className="order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] lg:max-w-none">
              <Image
                src="/hero.PNG"
                alt="Sky Glass IPTV Support"
                width={1200}
                height={900}
                priority
                unoptimized
                className="mx-auto h-auto max-h-[260px] w-full object-contain object-center sm:max-h-none"
              />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.36} className="mt-4 sm:mt-10 lg:mt-14">
          <ul className="grid grid-cols-3 divide-x divide-[#0B0E2C]/10 overflow-hidden rounded-[8px] border border-[#0B0E2C]/10">
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
        </FadeIn>
      </Container>
    </section>
  );
}
