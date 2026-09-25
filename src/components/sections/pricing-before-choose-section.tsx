import Link from "next/link";
import { Container } from "@/components/layout/container";
import { whatsappFreeTrialUrl } from "@/lib/site";
import { siteRoutes } from "@/lib/routes";

const QUESTIONS = [
  {
    q: "What counts as a device?",
    a: "A device is a compatible screen or player where you install and sign in. Installing the app on several devices does not automatically use extra simultaneous connections.",
  },
  {
    q: "Can several screens play simultaneously?",
    a: "Yes, up to the simultaneous-device count you select on this page. Streams above that allowance need a higher device option or a separate enquiry.",
  },
  {
    q: "Are third-party player fees included?",
    a: "No. Some platforms use a third-party IPTV player that may charge its own fee. Confirm any player cost separately before payment.",
  },
] as const;

const ORDER_STEPS = [
  "Choose Standard or Premium and your simultaneous device count.",
  "Select a 1, 3, 6 or 12-month term and note the total price.",
  "Send the selection via WhatsApp or the support page to confirm availability.",
  "Receive account details and follow the installation guide for your device.",
] as const;

export function PricingBeforeChooseSection() {
  return (
    <section
      id="before-you-choose"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Before You{" "}
            <span className="text-gradient-brand">Choose</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-[1.6] text-[#5C607A] sm:mt-5 sm:text-base sm:leading-[1.75]">
            Clear answers to the purchase questions that matter most, then a
            short order sequence.
          </p>
        </div>

        <div className="mx-auto mt-6 grid max-w-4xl gap-3 sm:mt-10 sm:gap-4">
          {QUESTIONS.map((item) => (
            <article
              key={item.q}
              className="glass-card px-4 py-4 sm:px-6 sm:py-5"
            >
              <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-[16px]">
                {item.q}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.6] text-[#5C607A] sm:text-[14px] sm:leading-[1.7]">
                {item.a}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-4xl glass-card px-4 py-5 sm:mt-10 sm:px-8 sm:py-8">
          <h3 className="text-[16px] font-bold text-[#0B0E2C] sm:text-[18px]">
            Order sequence
          </h3>
          <ol className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
            {ORDER_STEPS.map((step, index) => (
              <li
                key={step}
                className="flex gap-3 text-[13px] leading-[1.55] text-[#5C607A] sm:text-[14px] sm:leading-[1.65]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(123,47,255,0.12)] text-[12px] font-bold text-[#7B2FFF]">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[13px] font-semibold sm:mt-6 sm:text-[14px]">
            <Link
              href={siteRoutes.contact}
              className="text-[#0B0E2C] underline-offset-2 hover:underline"
            >
              Contact support
            </Link>
            <a
              href={whatsappFreeTrialUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B0E2C] underline-offset-2 hover:underline"
            >
              Request a trial
            </a>
            <Link
              href={siteRoutes.installation}
              className="text-[#0B0E2C] underline-offset-2 hover:underline"
            >
              Installation guide
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
