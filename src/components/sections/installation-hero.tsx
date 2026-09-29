import { Headphones } from "lucide-react";
import { Container } from "@/components/layout/container";
import { BlurReveal } from "@/components/animation/blur-reveal";
import { HeroMedia } from "@/components/hero-media";
import { whatsappUrl } from "@/lib/site";

export function InstallationHero() {
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
              Sky Glass App Download and{" "}
              <span className="text-gradient-brand">Installation Guide</span>
            </BlurReveal>

            <BlurReveal variant="text" delay={0.1}>
              <div className="mt-3 max-w-[560px] space-y-2 text-[13px] leading-[1.55] text-[#5C607A] sm:mt-6 sm:space-y-3 sm:text-base sm:leading-[1.75]">
                <p>
                  First identify your device, then follow its section. Have an
                  active trial or subscription, a working internet connection and
                  the account details supplied by support.
                </p>
                <p>
                  Your player may ask for a username and password, a server
                  address, a playlist link or portal information. The correct
                  format depends on the app. Keep those account details private.
                </p>
              </div>
            </BlurReveal>

            <BlurReveal variant="cta" delay={0.18}>
              <div className="mt-4 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-start sm:gap-4">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-[20px] bg-gradient-brand px-4 py-2.5 text-[13px] font-semibold text-white sm:min-h-[48px] sm:w-auto sm:px-6 sm:py-3 sm:text-[14px]"
                >
                  <Headphones className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                  Get Setup Assistance
                </a>
              </div>
            </BlurReveal>
          </div>

          <BlurReveal
            variant="media"
            delay={0.06}
            className="order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[560px] lg:max-w-none">
              <HeroMedia alt="Sky Glass app download and installation on Firestick and smart TV" />
            </div>
          </BlurReveal>
        </div>
      </Container>
    </section>
  );
}
