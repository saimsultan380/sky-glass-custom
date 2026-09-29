import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { siteRoutes } from "@/lib/routes";

const COVER = [
  "The plans provide access to available live TV and on-demand catalogue categories. Those categories can include sports, films, series, news, documentaries, family viewing and international entertainment.",
  "Standard may suit you if its current selection contains what you want. Premium is for viewers who want to compare the broader selection or features available with that package. Ask for the specific differences before paying for an upgrade.",
  "Available channels and titles can change. Picture resolution, programme information and catch-up depend on the stream, package and player. Check an essential channel or event with support rather than relying on a general category description.",
] as const;

const DURATIONS = [
  {
    title: "One month",
    body: "Ask for the current price if you want a shorter initial commitment.",
  },
  {
    title: "Three months",
    body: "A defined period at a lower initial cost than a longer plan.",
  },
  {
    title: "Six months",
    body: "Suitable if you have tested your device and want more time before renewal.",
  },
  {
    title: "Twelve months",
    body: "Standard costs £42 for the full year on 1 account; Premium costs £57. Check that the service and package meet your needs before choosing a year.",
  },
] as const;

export function PricingIncludesSection() {
  return (
    <>
      <section
        id="what-price-includes"
        className="relative border-t border-[#0B0E2C]/10 bg-transparent"
      >
        <Container className="py-10 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
              What do the plans{" "}
              <span className="text-gradient-brand">cover?</span>
            </h2>
          </div>
          <ul className="mx-auto mt-6 grid max-w-3xl gap-3 sm:mt-10 sm:gap-4">
            {COVER.map((item) => (
              <li key={item} className="glass-card flex items-start gap-3 p-4 sm:p-5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" strokeWidth={3} />
                <span className="text-[14px] leading-[1.6] text-[#0B0E2C] sm:text-[15px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="relative border-t border-[#0B0E2C]/10 bg-transparent">
        <Container className="py-10 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
              Choose a duration that{" "}
              <span className="text-gradient-brand">suits you</span>
            </h2>
          </div>
          <div className="mx-auto mt-6 grid max-w-4xl gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
            {DURATIONS.map((item) => (
              <article key={item.title} className="glass-card p-4 sm:p-5">
                <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-[16px]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-[#5C607A] sm:text-[14px]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-center text-[14px] leading-[1.6] text-[#5C607A] sm:mt-8">
            If you want to ask about a different duration, contact support for
            the current terms rather than assuming the price from another
            period. Setup steps live on the{" "}
            <Link
              href={siteRoutes.installation}
              className="font-semibold text-[#0B0E2C] underline-offset-2 hover:underline"
            >
              installation guide
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
