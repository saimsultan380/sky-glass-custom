import { Container } from "@/components/layout/container";
import { Check, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const AFTER_CONTACT_STEPS = [
  {
    title: "Step 1 – We Review Your Enquiry",
    description: "The support team reviews the information provided and identifies the type of assistance required.",
    color: "#FF6B2C"
  },
  {
    title: "Step 2 – We Check the Relevant Details",
    description: "Where necessary, we may ask for additional information about your device, application or subscription.",
    color: "#E91E8C"
  },
  {
    title: "Step 3 – You Receive Relevant Guidance",
    description: "You receive setup instructions, subscription information or troubleshooting steps based on your enquiry.",
    color: "#7B2FFF"
  },
  {
    title: "Step 4 – Complete the Setup or Trial",
    description: "Follow the supplied instructions to install the correct application, activate your account or begin your trial.",
    color: "#2563EB"
  },
  {
    title: "Step 5 – Reply if Further Help Is Required",
    description: "Continue through the same support conversation if the issue remains after following the recommended steps.",
    color: "#0B0E2C"
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
      <section className="bg-white py-16 sm:py-24 lg:py-32 border-b border-[#0B0E2C]/10">
        <Container>
          <div className="text-center">
            <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
              What Happens After You <span className="text-gradient-brand">Contact Us?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.75] text-[#5C607A] sm:text-base">
              Our support process is designed to get you up and running as quickly as possible.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AFTER_CONTACT_STEPS.map((step, index) => (
              <article
                key={step.title}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B0E2C]/20 hover:shadow-[var(--card-shadow-hover)] sm:p-8",
                  index === 3 || index === 4 ? "lg:col-span-1" : ""
                )}
                style={{
                  "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${step.color}1A`,
                  "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${step.color}33`,
                } as React.CSSProperties}
              >
                <div className="relative z-10 flex flex-1 flex-col h-full">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-gradient-brand text-[13px] font-bold text-white">
                      0{index + 1}
                    </span>
                    <h3 className="text-lg font-bold text-[#0B0E2C]">
                      {step.title.replace(`Step ${index + 1} – `, '')}
                    </h3>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#5C607A]">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 2: Before Requesting Technical Support */}
      <section className="bg-white py-16 sm:py-24 lg:py-32 border-b border-[#0B0E2C]/10">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-[8px] border border-[#0B0E2C]/10 bg-[#FF6B2C]/10 text-[#FF6B2C]">
                <AlertTriangle className="h-7 w-7" />
              </div>
              <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
                Before Requesting <span className="text-gradient-brand">Technical Support</span>
              </h2>
              <p className="mt-6 text-[15px] leading-[1.75] text-[#5C607A] sm:text-base">
                Try these basic checks before submitting a technical enquiry. Many common issues can be resolved with these simple steps.
              </p>
              <div className="mt-8 rounded-[8px] bg-[#F5F5F7] p-5 text-sm leading-relaxed text-[#5C607A]">
                <strong className="text-[#0B0E2C]">Reporting Buffering?</strong> Please explain whether the issue affects one stream, several categories, all content, or the entire application.
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {BEFORE_TECH_SUPPORT.map((item, index) => (
                <article
                  key={index}
                  className="group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B0E2C]/20 hover:shadow-[var(--card-shadow-hover)]"
                  style={{
                    "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px #2563EB1A`,
                    "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px #2563EB33`,
                  } as React.CSSProperties}
                >
                  <div className="relative z-10 flex flex-1 flex-col justify-center h-full">
                    <div className="flex items-start gap-3">
                      <svg width="0" height="0" className="absolute">
                        <defs>
                          <linearGradient id="gradient-brand" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ff6b2c" />
                            <stop offset="32%" stopColor="#e91e8c" />
                            <stop offset="68%" stopColor="#7b2fff" />
                            <stop offset="100%" stopColor="#2563eb" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <Check className="mt-0.5 h-5 w-5 shrink-0" style={{ stroke: "url(#gradient-brand)" }} strokeWidth={2.5} />
                      <span className="text-[15px] font-medium leading-relaxed text-[#0B0E2C]">{item}</span>
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
