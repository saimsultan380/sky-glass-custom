import { Headphones } from "lucide-react";
import { Container } from "@/components/layout/container";
import { whatsappUrl } from "@/lib/site";

export function ResellerCta() {
  return (
    <section
      id="reseller-cta"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent py-10 sm:py-16 lg:py-24"
    >
      <Container>
        <div className="mx-auto max-w-5xl glass-card px-5 py-8 text-center sm:px-10 sm:py-16">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Discuss a Package That Matches Your{" "}
            <span className="text-gradient-brand">Requirements</span>
          </h2>

          <div className="mx-auto mt-3 max-w-3xl space-y-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:space-y-4 sm:text-base sm:leading-[1.8]">
            <p>
              Ask about the current reseller terms before choosing a starting
              package.
            </p>
          </div>

          <div className="mt-4 flex flex-col items-stretch justify-center gap-2.5 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[20px] bg-gradient-brand px-6 py-2.5 text-[13px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:min-h-[48px] sm:py-3 sm:text-[14px]"
            >
              <Headphones className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
              Contact the Reseller Team
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
