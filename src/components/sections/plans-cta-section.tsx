import Link from "next/link";
import { Headphones, Tag } from "lucide-react";
import { Container } from "@/components/layout/container";
import { siteRoutes } from "@/lib/routes";

export function PlansCtaSection() {
  return (
    <section
      id="choose-your-plan"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent py-10 sm:py-16 lg:py-24"
    >
      <Container>
        <div className="mx-auto max-w-5xl glass-card px-5 py-8 text-center sm:px-10 sm:py-16">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Ready to Compare a{" "}
            <span className="text-gradient-brand">Price?</span>
          </h2>

          <div className="mx-auto mt-4 max-w-3xl space-y-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:space-y-4 sm:text-base sm:leading-[1.8]">
            <p>
              Pick your tier, simultaneous devices and term above, then send
              the selection to confirm availability before payment.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-10 sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <a
              href="#pricing-tables"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-[20px] bg-gradient-brand px-2 py-2.5 text-center text-[11px] font-semibold leading-snug text-white transition-opacity duration-150 hover:opacity-90 sm:min-h-[48px] sm:w-auto sm:gap-2 sm:px-6 sm:py-3 sm:text-[14px] sm:leading-normal"
            >
              <Tag className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" strokeWidth={2} aria-hidden />
              <span>Compare prices</span>
            </a>
            <Link
              href={siteRoutes.contact}
              className="border-gradient-brand inline-flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-[20px] px-2 py-2.5 text-center text-[11px] font-semibold leading-snug text-white transition-opacity duration-150 hover:opacity-80 sm:min-h-[48px] sm:w-auto sm:gap-2 sm:px-6 sm:py-3 sm:text-[14px] sm:leading-normal"
            >
              <Headphones
                className="h-3.5 w-3.5 shrink-0 text-white sm:h-4 sm:w-4"
                strokeWidth={2}
                aria-hidden
              />
              <span>Ask about a plan</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
