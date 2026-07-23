import { Container } from "@/components/layout/container";
import { Check, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const AFTER_CONTACT_STEPS = [
  {
    title: "Step 1 – We Review Your Enquiry",
    description:
      "The support team reviews the information provided and identifies the type of assistance required.",
    color: "#FF6B2C",
  },
  {
    title: "Step 2 – We Check the Relevant Details",
    description:
      "Where necessary, we may ask for additional information about your device, application or subscription.",
    color: "#E91E8C",
  },
  {
    title: "Step 3 – You Receive Relevant Guidance",
    description:
      "You receive setup instructions, subscription information or troubleshooting steps based on your enquiry.",
    color: "#7B2FFF",
  },
  {
    title: "Step 4 – Complete the Setup or Trial",
    description:
      "Follow the supplied instructions to install the correct application, activate your account or begin your trial.",
    color: "#2563EB",
  },
  {
    title: "Step 5 – Reply if Further Help Is Required",
    description:
      "Continue through the same support conversation if the issue remains after following the recommended steps.",
    color: "#0B0E2C",
  },
];

const BEFORE_TECH_SUPPORT = [
  "Confirm that your internet connection is working.",
  "Restart your router.",
  "Restart your streaming device.",
  "Close and reopen the IPTV application.",
  "Check that the login details were entered correctly.",
  "Remove accidental spaces from usernames and passwords.",
  "Confirm that the subscription remains active.",
  "Update the IPTV application where possible.",
  "Test another network connection if available.",
];

export function ContactSupportProcess() {
  return (
    <>
      {/* Section 1: What Happens After You Contact Us? */}
      <section className="border-b border-[#0B0E2C]/10 bg-white py-10 sm:py-16 lg:py-24">
        <Container>
          <div className="text-center">
            <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
              What Happens After You{" "}
              <span className="text-gradient-brand">Contact Us?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-[1.75]">
              Our support process is designed to get you up and running as
              quickly as possible.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {AFTER_CONTACT_STEPS.map((step, index) => (
              <article
                key={step.title}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-[1px] bg-white p-5 shadow-[var(--card-shadow)] card-hover-lift hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)] sm:p-8",
                  index === 3 || index === 4 ? "lg:col-span-1" : ""
                )}
                style={
                  {
                    "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${step.color}1A`,
                    "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${step.color}33`,
                  } as React.CSSProperties
                }
              >
                <div className="relative z-10 flex h-full flex-1 flex-col">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-[1px] bg-gradient-brand text-[12px] font-bold text-white sm:h-8 sm:w-8 sm:text-[13px]">
                      0{index + 1}
                    </span>
                    <h3 className="text-[14px] font-bold text-[#0B0E2C] sm:text-lg">
                      {step.title.replace(`Step ${index + 1} – `, "")}
                    </h3>
                  </div>
                  <p className="mt-2 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-4 sm:text-[15px] sm:leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 2: Before Requesting Technical Support */}
      <section className="border-b border-[#0B0E2C]/10 bg-white py-10 sm:py-16 lg:py-24">
        <Container>
          <div className="grid items-start gap-4 sm:gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div className="lg:sticky lg:top-24">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-[1px] bg-[#FF6B2C]/10 text-[#FF6B2C] sm:mb-6 sm:h-14 sm:w-14">
                <AlertTriangle className="h-4 w-4 sm:h-7 sm:w-7" />
              </div>
              <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
                Before Requesting{" "}
                <span className="text-gradient-brand">Technical Support</span>
              </h2>
              <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.75]">
                Try these basic checks before submitting a technical enquiry.
                Many common issues can be resolved with these simple steps.
              </p>
              <div className="mt-3 rounded-[1px] bg-[#F5F5F7] p-5 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-8 sm:p-5 sm:text-sm sm:leading-relaxed">
                <strong className="text-[#0B0E2C]">Reporting Buffering?</strong>{" "}
                Please explain whether the issue affects one stream, several
                categories, all content, or the entire application.
              </div>
            </div>

            <svg width="0" height="0" className="absolute" aria-hidden>
              <defs>
                <linearGradient
                  id="contact-support-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#ff6b2c" />
                  <stop offset="32%" stopColor="#e91e8c" />
                  <stop offset="68%" stopColor="#7b2fff" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
            </svg>

            <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
              {BEFORE_TECH_SUPPORT.map((item, index) => (
                <article
                  key={index}
                  className="group relative flex flex-col overflow-hidden rounded-[1px] bg-white p-5 shadow-[var(--card-shadow)] card-hover-lift hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)] sm:p-6"
                  style={
                    {
                      "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px #2563EB1A`,
                      "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px #2563EB33`,
                    } as React.CSSProperties
                  }
                >
                  <div className="relative z-10 flex h-full flex-1 flex-col justify-center">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Check
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 sm:h-5 sm:w-5"
                        style={{ stroke: "url(#contact-support-gradient)" }}
                        strokeWidth={2.5}
                      />
                      <span className="text-[12px] font-medium leading-snug text-[#0B0E2C] sm:text-[15px] sm:leading-relaxed">
                        {item}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
