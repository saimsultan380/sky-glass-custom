import Link from "next/link";
import { Container } from "@/components/layout/container";
import { whatsappFreeTrialUrl } from "@/lib/site";
import { siteRoutes } from "@/lib/routes";

const CHECKS = [
  {
    q: "Content",
    a: "Are the specific channels or categories you want currently included?",
  },
  {
    q: "Device",
    a: "Which app or player works with your exact model?",
  },
  {
    q: "Connections",
    a: "How many screens can stream simultaneously?",
  },
  {
    q: "Player fee",
    a: "Does the third-party app charge separately?",
  },
  {
    q: "Account setup",
    a: "What details will you receive, and which login method should you use?",
  },
] as const;

const FAQS = [
  {
    q: "Is 12 months of Standard £42?",
    a: "Yes. The full 12-month Standard subscription price for 1 account is £42.",
  },
  {
    q: "Does installing a player give me access?",
    a: "No. You also need an active trial or subscription and the account details supplied for it.",
  },
  {
    q: "Are player activation fees included?",
    a: "A third-party player can have its own charge. Check with the player developer and support before paying.",
  },
  {
    q: "Can I try the service first?",
    a: "You can request the available 24-hour trial and test your device and connection. Confirm any differences between trial and paid access.",
  },
] as const;

export function PricingBeforeChooseSection() {
  return (
    <>
      <section
        id="before-you-choose"
        className="relative border-t border-[#0B0E2C]/10 bg-transparent"
      >
        <Container className="py-10 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
              Before you pay, confirm{" "}
              <span className="text-gradient-brand">five things</span>
            </h2>
          </div>
          <div className="mx-auto mt-6 grid max-w-4xl gap-3 sm:mt-10 sm:gap-4">
            {CHECKS.map((item) => (
              <article key={item.q} className="glass-card px-4 py-4 sm:px-6 sm:py-5">
                <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-[16px]">
                  {item.q}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-[#5C607A] sm:text-[14px]">
                  {item.a}
                </p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-6 max-w-4xl glass-card px-4 py-5 sm:mt-10 sm:px-8 sm:py-8">
            <h3 className="text-[16px] font-bold text-[#0B0E2C] sm:text-[18px]">
              What happens after you choose?
            </h3>
            <p className="mt-3 text-[13px] leading-[1.6] text-[#5C607A] sm:text-[14px] sm:leading-[1.7]">
              Once the order is confirmed, support provides the account
              information for your setup. Follow the{" "}
              <Link
                href={siteRoutes.installation}
                className="font-semibold text-[#0B0E2C] underline-offset-2 hover:underline"
              >
                installation guide
              </Link>
              , enter those details in the appropriate app and allow the content
              to load.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative border-t border-[#0B0E2C]/10 bg-transparent">
        <Container className="py-10 sm:py-16 lg:py-24">
          <h2 className="text-center text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Pricing{" "}
            <span className="text-gradient-brand">FAQs</span>
          </h2>
          <div className="mx-auto mt-6 grid max-w-4xl gap-3 sm:mt-10 sm:gap-4">
            {FAQS.map((item) => (
              <article key={item.q} className="glass-card px-4 py-4 sm:px-6 sm:py-5">
                <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-[16px]">
                  {item.q}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-[#5C607A] sm:text-[14px]">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[13px] font-semibold sm:mt-8 sm:text-[14px]">
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
          </div>
        </Container>
      </section>
    </>
  );
}
