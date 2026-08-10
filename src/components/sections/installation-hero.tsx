import Image from "next/image";
import {
  Headphones,
  Zap,
  Monitor,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { MaskReveal } from "@/components/animation/mask-reveal";
import { whatsappUrl } from "@/lib/site";

const TRUST_ITEMS = [
  { label: "Simple Installation", icon: Zap, color: "#FF6B2C" },
  { label: "Popular Devices Supported", icon: Monitor, color: "#7B2FFF" },
  { label: "Setup Help Available", icon: ShieldCheck, color: "#2563EB" },
] as const;

export function InstallationHero() {
  return (
    <section data-hero className="relative bg-white pt-4 sm:pt-6">
      <Container className="pb-5 pt-2 sm:pb-12 sm:pt-8 lg:pb-16 lg:pt-12" animate={false}>
        <div className="grid items-center gap-4 sm:gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:gap-14">
          <div className="order-1 min-w-0">
            <MaskReveal
              as="h1"
              align="left"
              className="max-w-[640px] text-[24px] font-bold leading-[1.18] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] md:text-[42px] lg:text-[46px]"
            >
              Sky Glass IPTV –{" "}
              <span className="text-gradient-brand">Installation Guide</span> for
              Firestick, Android, Smart TVs & More
            </MaskReveal>

            <FadeIn delay={0.2}>
              <div className="mt-3 max-w-[560px] space-y-2 text-[13px] leading-[1.55] text-[#5C607A] sm:mt-6 sm:space-y-3 sm:text-base sm:leading-[1.75]">
                <p>
                  Set up Sky Glass IPTV on your preferred device with clear,
                  device-specific installation instructions.
                </p>
                <p>
                  The official Sky Glass IPTV application is available for
                  compatible Firestick and Android devices. Supported alternatives
                  IPTV players can be used on Samsung and LG Smart TVs, Apple
                  devices, Windows PCs and Mac computers.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.28}>
              <div className="mt-4 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-start sm:gap-4">
                <div className="flex w-full flex-col items-stretch gap-1.5 sm:w-auto sm:gap-2.5">
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-[1px] bg-gradient-brand px-4 py-2.5 text-[13px] font-semibold text-white sm:min-h-[48px] sm:px-6 sm:py-3 sm:text-[14px]"
                  >
                    <Zap className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                    Install the App
                  </a>
                </div>

                <div className="flex w-full flex-col items-stretch gap-1.5 sm:w-auto sm:gap-2.5">
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-gradient-brand inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-[1px] px-4 py-2.5 text-[13px] font-semibold text-[#0B0E2C] sm:min-h-[48px] sm:px-6 sm:py-3 sm:text-[14px]"
                  >
                    <Headphones
                      className="h-4 w-4 shrink-0 text-[#E91E8C]"
                      strokeWidth={2}
                      aria-hidden
                    />
                    Get Setup Assistance
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.08} className="order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] lg:max-w-none">
              <Image
                src="/hero.PNG"
                alt="Sky Glass IPTV installation guide"
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
          <ul className="grid grid-cols-3 divide-x divide-[#0B0E2C]/10 overflow-hidden rounded-[1px]">
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
