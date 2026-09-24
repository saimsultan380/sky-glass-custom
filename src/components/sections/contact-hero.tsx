import {
  Clock,
  Headphones,
  Mail,
  Phone,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { MaskReveal } from "@/components/animation/mask-reveal";
import { HeroMedia } from "@/components/hero-media";
import {
  siteConfig,
  whatsappFreeTrialUrl,
  whatsappUrl,
} from "@/lib/site";

export function ContactHero() {
  return (
    <section data-hero className="relative bg-transparent border-b border-[#0B0E2C]/10 pt-4 sm:pt-6">
      <Container className="pb-5 pt-2 sm:pb-12 sm:pt-8 lg:pb-16 lg:pt-12" animate={false}>
        <div className="grid items-center gap-4 sm:gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:gap-14">
          <div className="order-1 min-w-0">
            <MaskReveal
              as="h1"
              align="left"
              className="max-w-[640px] text-[24px] font-bold leading-[1.18] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] md:text-[42px] lg:text-[46px]"
            >
              Contact Sky Glass IPTV — Get Help with Trials, Plans and{" "}
              <span className="text-gradient-brand">Setup</span>
            </MaskReveal>

            <FadeIn delay={0.2}>
              <div className="mt-3 max-w-[560px] space-y-2 text-[13px] leading-[1.55] text-[#5C607A] sm:mt-6 sm:space-y-3 sm:text-base sm:leading-[1.75]">
                <p>
                  Tell us what you want to do and which device you use. Whether
                  you are requesting a trial, choosing a subscription or
                  resolving a setup issue, the right details help us understand
                  your enquiry.
                </p>
                <p className="flex items-center gap-2 font-medium text-[#0B0E2C]">
                  <Phone className="h-4 w-4 shrink-0 text-[#E91E8C]" strokeWidth={1.75} />
                  WhatsApp: {siteConfig.phone}
                </p>
                <p className="flex items-center gap-2 font-medium text-[#0B0E2C]">
                  <Mail className="h-4 w-4 shrink-0 text-[#7B2FFF]" strokeWidth={1.75} />
                  Email: {siteConfig.email}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.28}>
              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-8 sm:flex sm:flex-row sm:items-start sm:gap-4">
                <a
                  href={whatsappFreeTrialUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-[20px] bg-gradient-brand px-2 py-2.5 text-center text-[11px] font-semibold leading-snug text-white sm:min-h-[48px] sm:w-auto sm:gap-2 sm:px-6 sm:py-3 sm:text-left sm:text-[14px] sm:leading-normal"
                >
                  <Clock className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" strokeWidth={2} aria-hidden />
                  <span>Request Your 24-Hour Trial</span>
                </a>

                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-gradient-brand inline-flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-[20px] px-2 py-2.5 text-center text-[11px] font-semibold leading-snug text-white sm:min-h-[48px] sm:w-auto sm:gap-2 sm:px-6 sm:py-3 sm:text-left sm:text-[14px] sm:leading-normal"
                >
                  <Headphones
                    className="h-3.5 w-3.5 shrink-0 text-white sm:h-4 sm:w-4"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span>Contact Customer Support</span>
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.08} className="order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] lg:max-w-none">
              <HeroMedia alt="Sky Glass IPTV support contact on a laptop and phone" />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
