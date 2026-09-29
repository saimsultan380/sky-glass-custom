import { Container } from "@/components/layout/container";
import { Check, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { siteRoutes } from "@/lib/routes";

const CHECKS_TO_TRY = [
  "Make sure your internet connection works and your account is active.",
  "Reopen the app, check the login fields for mistakes and test another stream if playback is the issue.",
];

export function ContactSupportProcess() {
  return (
    <section className="border-b border-[#0B0E2C]/10 bg-transparent py-10 sm:py-16 lg:py-24">
      <Container>
        <div className="grid items-start gap-4 sm:gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
              Checks to try{" "}
              <span className="text-gradient-brand">first</span>
            </h2>
            <p className="mt-4 text-[14px] leading-[1.65] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-relaxed">
              The{" "}
              <Link
                href={siteRoutes.installation}
                className="font-semibold text-[#7B2FFF] hover:underline"
              >
                installation guide
              </Link>{" "}
              has the steps for each device group.
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-1 sm:gap-4">
            {CHECKS_TO_TRY.map((item) => (
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

            <article className="relative flex flex-col overflow-hidden glass-card p-5 sm:p-6">
              <div className="relative z-10 flex items-start gap-2 sm:gap-3">
                <ShieldAlert
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FF6B2C] sm:h-5 sm:w-5"
                  strokeWidth={2.5}
                />
                <span className="text-[12px] font-medium leading-snug text-[#0B0E2C] sm:text-[15px] sm:leading-relaxed">
                  Keep passwords, playlist links and payment-card information
                  out of public posts.
                </span>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
