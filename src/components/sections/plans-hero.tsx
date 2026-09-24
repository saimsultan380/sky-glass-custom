import Link from "next/link";
import {
  Clock,
  Headphones,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { MaskReveal } from "@/components/animation/mask-reveal";
import { HeroMedia } from "@/components/hero-media";
import {
  whatsappFreeTrialUrl,
  whatsappUrl,
} from "@/lib/site";

export function PlansHero() {
  return (
    <section data-hero className="relative bg-transparent pt-4 sm:pt-6">
      <Container className="pb-5 pt-2 sm:pb-12 sm:pt-8 lg:pb-16 lg:pt-12" animate={false}>
        <div className="grid items-center gap-4 sm:gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:gap-14">
          <div className="order-1 min-w-0">
            <MaskReveal
              as="h1"
              align="left"
              className="max-w-[640px] text-[24px] font-bold leading-[1.18] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] md:text-[42px] lg:text-[46px]"
            >
              Sky Glass IPTV Subscription Plans — Compare Prices and Choose Your{" "}
              <span className="text-gradient-brand">Duration</span>
            </MaskReveal>

            <FadeIn delay={0.2}>
              <div className="mt-3 max-w-[560px] space-y-2 text-[13px] leading-[1.55] text-[#5C607A] sm:mt-6 sm:space-y-3 sm:text-base sm:leading-[1.75]">
                <p>
                  Choose a Sky Glass IPTV subscription by comparing the
                  entertainment access, duration and connection allowance you
                  need.
                </p>
                <p>
                  Standard and Premium plans are available for 3, 6, 12 or 24
                  months. If you want to check compatibility first, request a
                  24-hour trial using the device you intend to watch on.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.28}>
              <div className="mt-4 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-start sm:gap-4">
                <div className="flex w-full flex-col items-stretch gap-1.5 sm:w-auto sm:gap-2.5">
                  <a
                    href={whatsappFreeTrialUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-[20px] bg-gradient-brand px-4 py-2.5 text-[13px] font-semibold text-white sm:min-h-[48px] sm:px-6 sm:py-3 sm:text-[14px]"
                  >
                    <Clock className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                    Request a 24-Hour Trial
                  </a>
                </div>

                <div className="flex w-full flex-col items-stretch gap-1.5 sm:w-auto sm:gap-2.5">
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-gradient-brand inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-[20px] px-4 py-2.5 text-[13px] font-semibold text-[#0B0E2C] sm:min-h-[48px] sm:px-6 sm:py-3 sm:text-[14px]"
                  >
                    <Headphones
                      className="h-4 w-4 shrink-0 text-[#E91E8C]"
                      strokeWidth={2}
                      aria-hidden
                    />
                    Ask About a Subscription
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.08} className="order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] lg:max-w-none">
              <HeroMedia alt="Sky Glass IPTV subscription plans shown on a television screen" />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
