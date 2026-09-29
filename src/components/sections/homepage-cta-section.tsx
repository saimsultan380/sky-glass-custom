import Link from "next/link";
import { Clock, Headphones, Tag } from "lucide-react";
import { Container } from "@/components/layout/container";
import { whatsappFreeTrialUrl, whatsappUrl } from "@/lib/site";
import { siteRoutes } from "@/lib/routes";

export function HomepageCtaSection() {
  return (
    <section className="relative border-t border-[#0B0E2C]/10 bg-transparent py-10 sm:py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-5xl glass-card px-5 py-8 text-center sm:px-10 sm:py-16">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Ready to{" "}
            <span className="text-gradient-brand">continue?</span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-base">
            Request a trial, compare subscription plans or contact support with
            your device details.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-2.5 sm:mt-10 sm:grid-cols-3 sm:gap-4">
            <a
              href={whatsappFreeTrialUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-[20px] bg-gradient-brand px-3 py-2.5 text-center text-[12px] font-semibold text-white sm:text-[14px]"
            >
              <Clock className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
              Request a Trial
            </a>
            <Link
              href={siteRoutes.plans}
              className="border-gradient-brand inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-[20px] px-3 py-2.5 text-center text-[12px] font-semibold sm:text-[14px]"
            >
              <Tag className="h-4 w-4 shrink-0 text-[#7B2FFF]" strokeWidth={2} aria-hidden />
              <span className="text-gradient-brand">View Plans</span>
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="border-gradient-brand inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-[20px] px-3 py-2.5 text-center text-[12px] font-semibold sm:text-[14px]"
            >
              <Headphones className="h-4 w-4 shrink-0 text-[#7B2FFF]" strokeWidth={2} aria-hidden />
              <span className="text-gradient-brand">Contact Support</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
