import {
  Laptop,
  Monitor,
  ShieldCheck,
  Check,
} from "lucide-react";
import { Container } from "@/components/layout/container";

export function InstallationDesktop() {
  return (
    <section
      id="install-desktop"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C]">
            Windows & Mac
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Set Up on{" "}
            <span className="text-gradient-brand">Windows PCs & Mac</span>
          </h2>
          <p className="mt-5 text-[15px] leading-[1.75] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.8]">
            Access Sky Glass IPTV on your computer using a compatible application
            designed for desktop operating systems.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Windows Card */}
          <div className="group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(37,99,235,0.08)] sm:p-8">
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center gap-3">
                <Monitor className="h-6 w-6 text-[#2563EB]" />
                <h3 className="text-xl font-bold text-[#0B0E2C]">
                  Windows Setup
                </h3>
              </div>
              <div className="mt-6 space-y-4">
                <p className="text-[14px] font-semibold text-[#5C607A]">
                  Recommended Players:
                </p>
                <ul className="space-y-2.5">
                  {[
                    "IBO Player (Microsoft Store)",
                    "IPTV Smarters Expert",
                    "Other Windows IPTV players",
                  ].map((app) => (
                    <li
                      key={app}
                      className="flex items-center gap-2 text-[14px] text-[#0B0E2C]"
                    >
                      <Check className="h-4 w-4 text-[#2563EB]" />
                      {app}
                    </li>
                  ))}
                </ul>
                <div className="space-y-3 pt-2">
                  <p className="text-[14px] font-bold text-[#0B0E2C]">Setup:</p>
                  {[
                    "Download player from Store or official site.",
                    "Install and open the application.",
                    "Choose login method and enter details.",
                    "Save account and load categories.",
                  ].map((step, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-[13px] font-bold text-[#2563EB]">
                        {i + 1}.
                      </span>
                      <p className="text-[13px] text-[#5C607A]">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mac Card */}
          <div className="group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(123,47,255,0.08)] sm:p-8">
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center gap-3">
                <Laptop className="h-6 w-6 text-[#7B2FFF]" />
                <h3 className="text-xl font-bold text-[#0B0E2C]">Mac Setup</h3>
              </div>
              <div className="mt-6 space-y-4">
                <p className="text-[14px] font-semibold text-[#5C607A]">
                  Recommended Players:
                </p>
                <ul className="space-y-2.5">
                  {[
                    "IBO Player Pro",
                    "iPlayTV-compatible apps",
                    "Other macOS IPTV players",
                  ].map((app) => (
                    <li
                      key={app}
                      className="flex items-center gap-2 text-[14px] text-[#0B0E2C]"
                    >
                      <Check className="h-4 w-4 text-[#7B2FFF]" />
                      {app}
                    </li>
                  ))}
                </ul>
                <div className="space-y-3 pt-2">
                  <p className="text-[14px] font-bold text-[#0B0E2C]">Setup:</p>
                  {[
                    "Install player from App Store or official source.",
                    "Open application and select login method.",
                    "Enter Sky Glass subscription info.",
                    "Save and allow content to load.",
                  ].map((step, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-[13px] font-bold text-[#7B2FFF]">
                        {i + 1}.
                      </span>
                      <p className="text-[13px] text-[#5C607A]">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-[8px] border border-[#FF6B2C]/20 bg-[#FF6B2C]/5 p-5">
          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#FF6B2C]" />
            <p className="text-[13px] leading-relaxed text-[#5C607A]">
              <strong>Security Tip:</strong> Only install IPTV software from
              official app stores or verified developer websites. Avoid
              installing unknown software from unverified sources.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
