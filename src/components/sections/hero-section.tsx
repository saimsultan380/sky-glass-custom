import Link from "next/link";
import {
  Clock,
  Tag,
  Layers,
  Monitor,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { BlurReveal } from "@/components/animation/blur-reveal";
import { HeroMedia } from "@/components/hero-media";
import { whatsappFreeTrialUrl } from "@/lib/site";

const TRUST_ITEMS = [
  { label: "Standard and Premium options", icon: Layers, color: "#FF6B2C" },
  { label: "Supported streaming devices", icon: Monitor, color: "#7B2FFF" },
  { label: "Setup assistance", icon: ShieldCheck, color: "#2563EB" },
] as const;

export function HeroSection() {
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
              Sky Glass IPTV | IPTV Subscription For{" "}
              <span className="text-gradient-brand">UK</span>
            </BlurReveal>

            <BlurReveal variant="text" delay={0.1}>
              <div className="mt-3 max-w-[560px] space-y-2 text-[13px] leading-[1.55] text-[#5C607A] sm:mt-6 sm:space-y-3 sm:text-base sm:leading-[1.75]">
                <p>
                  Choose a subscription that fits how you watch. Sky Glass IPTV
                  provides access to the live TV and on-demand categories
                  available in your selected package through a compatible device
                  and player.
                </p>
                <p>
                  If you are new to the service, start with your device. Check
                  the content you want, compare the subscription periods and
                  request a 24-hour trial before choosing a longer plan.
                </p>
              </div>
            </BlurReveal>

            <BlurReveal variant="cta" delay={0.18}>
              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-8 sm:flex sm:flex-row sm:items-start sm:gap-4">
                <Link
                  href="#plans"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-[20px] bg-gradient-brand px-2 py-2.5 text-center text-[11px] font-semibold leading-snug text-white sm:min-h-[48px] sm:w-auto sm:gap-2 sm:px-6 sm:py-3 sm:text-left sm:text-[14px] sm:leading-normal"
                >
                  <Tag className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" strokeWidth={2} aria-hidden />
                  <span>View Subscription Plans</span>
                </Link>

                <a
                  href={whatsappFreeTrialUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-gradient-brand inline-flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-[20px] px-2 py-2.5 text-center text-[11px] font-semibold leading-snug sm:min-h-[48px] sm:w-auto sm:gap-2 sm:px-6 sm:py-3 sm:text-left sm:text-[14px] sm:leading-normal"
                >
                  <Clock
                    className="h-3.5 w-3.5 shrink-0 text-[#7B2FFF] sm:h-4 sm:w-4"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span className="text-gradient-brand">Request a 24-Hour Trial</span>
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
              <HeroMedia alt="Sky Glass IPTV shown on a television, streaming box and mobile screen" />
            </div>
          </BlurReveal>
        </div>

        <BlurReveal variant="card" delay={0.24} className="mt-4 sm:mt-10 lg:mt-14">
          <ul className="grid grid-cols-3 divide-x divide-[#0B0E2C]/10 overflow-hidden rounded-[20px]">
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
        </BlurReveal>
      </Container>
    </section>
  );
}
