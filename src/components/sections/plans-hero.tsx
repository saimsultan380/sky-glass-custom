import Link from "next/link";
import { Headphones, Tag } from "lucide-react";
import { Container } from "@/components/layout/container";
import { BlurReveal } from "@/components/animation/blur-reveal";
import { HeroMedia } from "@/components/hero-media";
import { siteRoutes } from "@/lib/routes";

export function PlansHero() {
  return (
    <section data-hero className="relative bg-transparent pt-4 sm:pt-6">
      <Container className="pb-5 pt-2 sm:pb-12 sm:pt-8 lg:pb-16 lg:pt-12" animate={false}>
        <div className="grid items-center gap-4 sm:gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:gap-14">
          <div className="order-1 min-w-0">
            <BlurReveal
              as="h1"
              variant="hero"
              className="max-w-[640px] text-[24px] font-bold leading-[1.18] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] md:text-[42px] lg:text-[46px]"
            >
              Sky Glass IPTV Pricing for{" "}
              <span className="text-gradient-brand">1–4 Devices</span>
            </BlurReveal>

            <BlurReveal variant="text" delay={0.1}>
              <div className="mt-3 max-w-[560px] space-y-2 text-[13px] leading-[1.55] text-[#5C607A] sm:mt-6 sm:space-y-3 sm:text-base sm:leading-[1.75]">
                <p>
                  Compare the full price for your subscription length, viewing
                  tier and number of simultaneous screens. Choose Standard or
                  Premium, then check the details before ordering.
                </p>
              </div>
            </BlurReveal>

            <BlurReveal variant="cta" delay={0.18}>
              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-8 sm:flex sm:flex-row sm:items-start sm:gap-4">
                <a
                  href="#pricing-tables"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-[20px] bg-gradient-brand px-2 py-2.5 text-center text-[11px] font-semibold leading-snug text-white sm:min-h-[48px] sm:w-auto sm:gap-2 sm:px-6 sm:py-3 sm:text-left sm:text-[14px] sm:leading-normal"
                >
                  <Tag className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" strokeWidth={2} aria-hidden />
                  <span>Compare prices</span>
                </a>

                <Link
                  href={siteRoutes.contact}
                  className="border-gradient-brand inline-flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-[20px] px-2 py-2.5 text-center text-[11px] font-semibold leading-snug text-white sm:min-h-[48px] sm:w-auto sm:gap-2 sm:px-6 sm:py-3 sm:text-left sm:text-[14px] sm:leading-normal"
                >
                  <Headphones
                    className="h-3.5 w-3.5 shrink-0 text-white sm:h-4 sm:w-4"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span>Ask about a plan</span>
                </Link>
              </div>
            </BlurReveal>

            <BlurReveal variant="text" delay={0.24}>
              <p className="mt-3 max-w-[560px] text-[12px] leading-[1.55] text-[#5C607A] sm:mt-4 sm:text-[13px] sm:leading-[1.65]">
                A device can have the app installed without being an additional
                simultaneous connection. The device number below means screens
                that can stream at the same time.
              </p>
            </BlurReveal>
          </div>

          <BlurReveal
            variant="media"
            delay={0.06}
            className="order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[560px] lg:max-w-none">
              <HeroMedia alt="Sky Glass IPTV subscription pricing shown on a television screen" />
            </div>
          </BlurReveal>
        </div>
      </Container>
    </section>
  );
}
