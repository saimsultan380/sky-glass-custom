import { Clock, Headphones } from "lucide-react";
import { Container } from "@/components/layout/container";
import { whatsappFreeTrialUrl, whatsappUrl } from "@/lib/site";

export function PlansCtaSection() {
  return (
    <section
      id="choose-your-plan"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent py-10 sm:py-16 lg:py-24"
    >
      <Container>
        <div className="mx-auto max-w-5xl glass-card px-5 py-8 text-center sm:px-10 sm:py-16">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Ready to choose a{" "}
            <span className="text-gradient-brand">plan?</span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-base">
            Ask about a package and duration, or request a trial first.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-10 sm:flex sm:justify-center sm:gap-4">
            <a
              href={whatsappUrl("Ask about a Sky Glass IPTV plan")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-[20px] bg-gradient-brand px-3 py-2.5 text-center text-[11px] font-semibold text-white sm:px-6 sm:text-[14px]"
            >
              <Headphones className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" strokeWidth={2} aria-hidden />
              Ask About a Plan
            </a>
            <a
              href={whatsappFreeTrialUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="border-gradient-brand inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-[20px] px-3 py-2.5 text-center text-[11px] font-semibold sm:px-6 sm:text-[14px]"
            >
              <Clock className="h-3.5 w-3.5 shrink-0 text-[#7B2FFF] sm:h-4 sm:w-4" strokeWidth={2} aria-hidden />
              <span className="text-gradient-brand">Request a Trial</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
