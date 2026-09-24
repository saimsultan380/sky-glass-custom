import { Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { whatsappSubscriptionUrl } from "@/lib/site";

const STANDARD_FEATURES = [
  "Available live television.",
  "Sports channels where included.",
  "Movies and television series.",
  "Electronic Programme Guide support.",
  "Compatibility with supported IPTV applications.",
  "Installation instructions.",
  "Customer assistance.",
  "Account activation following confirmation.",
] as const;

const PREMIUM_FEATURES = [
  "Expanded live television access.",
  "Available sports and event programming.",
  "A larger movies and series library.",
  "Electronic Programme Guide support.",
  "Catch-Up where available.",
  "HD, Full HD and 4K options where supported.",
  "Compatibility with supported devices.",
  "Setup assistance.",
  "Account activation following confirmation.",
] as const;

export function PlansIncludedSection() {
  return (
    <section
      id="plans"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
          <article className="group relative flex flex-col overflow-hidden glass-card card-hover-lift p-5 hover:-translate-y-1 sm:p-8">
            <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[32px]">
              What Comes with{" "}
              <span className="text-gradient-brand">Standard?</span>
            </h2>
            <p className="mt-3 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-[15px] sm:leading-[1.75]">
              The Standard package brings together available live television and
              on-demand categories for everyday viewing.
            </p>
            <p className="mt-3 text-[14px] font-semibold text-[#0B0E2C] sm:mt-5">
              Included features cover:
            </p>
            <ul className="mt-3 grid gap-2.5 sm:mt-4 sm:gap-3">
              {STANDARD_FEATURES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[13px] leading-snug text-[#0B0E2C] sm:gap-3 sm:text-[14px]"
                >
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#7B2FFF]" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={whatsappSubscriptionUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-[20px] bg-gradient-brand px-6 py-2.5 text-[13px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:min-h-[48px] sm:w-auto sm:text-[14px]"
            >
              Choose Standard
            </a>
          </article>

          <article className="group relative flex flex-col overflow-hidden glass-card card-hover-lift p-5 hover:-translate-y-1 sm:p-8">
            <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[32px]">
              What Comes with{" "}
              <span className="text-gradient-brand">Premium?</span>
            </h2>
            <p className="mt-3 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-[15px] sm:leading-[1.75]">
              Premium expands the entertainment selection for viewers who want
              broader access.
            </p>
            <p className="mt-3 text-[14px] font-semibold text-[#0B0E2C] sm:mt-5">
              Included features cover:
            </p>
            <ul className="mt-3 grid gap-2.5 sm:mt-4 sm:gap-3">
              {PREMIUM_FEATURES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[13px] leading-snug text-[#0B0E2C] sm:gap-3 sm:text-[14px]"
                >
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#E91E8C]" strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={whatsappSubscriptionUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-[20px] bg-gradient-brand px-6 py-2.5 text-[13px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:min-h-[48px] sm:w-auto sm:text-[14px]"
            >
              Choose Premium
            </a>
          </article>
        </div>
      </Container>
    </section>
  );
}
