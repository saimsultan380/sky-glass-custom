import { Container } from "@/components/layout/container";
import { Check, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { siteRoutes } from "@/lib/routes";

const AFTER_CONTACT = [
  "The team reviews your message and identifies the information needed to help.",
  "You may receive setup instructions, package details or troubleshooting steps. If more information is required, the team may ask about your device, player or subscription.",
  "If the issue continues, reply in the same conversation and explain what happened after following the instructions.",
];

const BEFORE_TECH_SUPPORT = [
  "Confirm that your internet connection works and that your subscription is active.",
  "Close and reopen the application. If necessary, restart the device and router. Check your login details for accidental spaces or typing errors.",
  "For playback problems, try another stream and record whether the result changes. This information helps narrow down the issue.",
];

export function ContactSupportProcess() {
  return (
    <>
      <section className="border-b border-[#0B0E2C]/10 bg-transparent py-10 sm:py-16 lg:py-24">
        <Container>
          <div className="grid items-start gap-4 sm:gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div className="lg:sticky lg:top-24">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-[20px] bg-[#FF6B2C]/10 text-[#FF6B2C] sm:mb-6 sm:h-14 sm:w-14">
                <AlertTriangle className="h-4 w-4 sm:h-7 sm:w-7" />
              </div>
              <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
                Checks You Can Try{" "}
                <span className="text-gradient-brand">First</span>
              </h2>
            </div>

            <div className="grid gap-2 sm:grid-cols-1 sm:gap-4">
              {BEFORE_TECH_SUPPORT.map((item) => (
                <article
                  key={item}
                  className="group relative flex flex-col overflow-hidden glass-card card-hover-lift p-5 hover:-translate-y-1 sm:p-6"
                >
                  <div className="relative z-10 flex items-start gap-2 sm:gap-3">
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2563EB] sm:h-5 sm:w-5"
                      strokeWidth={2.5}
                    />
                    <span className="text-[12px] font-medium leading-snug text-[#0B0E2C] sm:text-[15px] sm:leading-relaxed">
                      {item}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center sm:mt-10">
            <Link
              href={siteRoutes.installation}
              className="inline-flex text-[14px] font-bold text-[#7B2FFF] hover:underline sm:text-base"
            >
              View the Installation Guide
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-[#0B0E2C]/10 bg-transparent py-10 sm:py-16 lg:py-24">
        <Container>
          <div className="text-center">
            <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
              What Happens After You{" "}
              <span className="text-gradient-brand">Contact Us?</span>
            </h2>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-6">
            {AFTER_CONTACT.map((step, index) => (
              <article
                key={step}
                className="group relative flex flex-col overflow-hidden glass-card card-hover-lift p-5 hover:-translate-y-1 sm:p-8"
              >
                <div className="relative z-10 flex h-full flex-1 flex-col">
                  <span className="flex h-8 w-8 items-center justify-center rounded-[20px] bg-gradient-brand text-[12px] font-bold text-white sm:text-[13px]">
                    0{index + 1}
                  </span>
                  <p className="mt-3 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-4 sm:text-[15px] sm:leading-relaxed">
                    {step}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
