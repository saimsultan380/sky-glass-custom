import {
  MonitorPlay,
  Smartphone,
  Check,
  Info,
} from "lucide-react";
import { Container } from "@/components/layout/container";

export function InstallationApple() {
  return (
    <section
      id="install-apple"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C]">
            Apple Devices
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Set Up on{" "}
            <span className="text-[#7B2FFF]">Apple TV, iPhone & iPad</span>
          </h2>
          <p className="mt-5 text-[15px] leading-[1.75] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.8]">
            Apple users can access Sky Glass IPTV through compatible applications
            available from the Apple App Store.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Apple TV Card */}
          <div className="group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(123,47,255,0.08)] sm:p-8">
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center gap-3">
                <MonitorPlay className="h-6 w-6 text-[#7B2FFF]" />
                <h3 className="text-xl font-bold text-[#0B0E2C]">Apple TV</h3>
              </div>
              <p className="mt-4 text-sm font-semibold text-[#5C607A]">
                Recommended Players:
              </p>
              <ul className="mt-3 space-y-2.5">
                {["IBO Player Pro", "iPlayTV", "Other tvOS IPTV apps"].map(
                  (app) => (
                    <li
                      key={app}
                      className="flex items-center gap-2 text-[14px] text-[#0B0E2C]"
                    >
                      <Check className="h-4 w-4 text-[#7B2FFF]" />
                      {app}
                    </li>
                  )
                )}
              </ul>

              <div className="mt-6 space-y-3">
                <p className="text-[14px] font-bold text-[#0B0E2C]">Setup Steps:</p>
                {[
                  "Open App Store and search for player.",
                  "Install and select login method.",
                  "Enter Sky Glass subscription info.",
                  "Save profile and load categories.",
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

          {/* iPhone / iPad Card */}
          <div className="group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(233,30,140,0.08)] sm:p-8">
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center gap-3">
                <Smartphone className="h-6 w-6 text-[#E91E8C]" />
                <h3 className="text-xl font-bold text-[#0B0E2C]">
                  iPhone & iPad
                </h3>
              </div>
              <p className="mt-4 text-sm font-semibold text-[#5C607A]">
                Recommended Players:
              </p>
              <ul className="mt-3 space-y-2.5">
                {["iPlayTV AIO", "IBO Player Pro", "Other iOS IPTV apps"].map(
                  (app) => (
                    <li
                      key={app}
                      className="flex items-center gap-2 text-[14px] text-[#0B0E2C]"
                    >
                      <Check className="h-4 w-4 text-[#E91E8C]" />
                      {app}
                    </li>
                  )
                )}
              </ul>

              <div className="mt-6 space-y-3">
                <p className="text-[14px] font-bold text-[#0B0E2C]">Setup Steps:</p>
                {[
                  "Install player from Apple App Store.",
                  "Select login or playlist method.",
                  "Enter Sky Glass subscription info.",
                  "Save profile and wait for loading.",
                ].map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-[13px] font-bold text-[#E91E8C]">
                      {i + 1}.
                    </span>
                    <p className="text-[13px] text-[#5C607A]">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-[8px] border border-[#0B0E2C]/10 p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <Info className="mt-1 h-5 w-5 shrink-0 text-[#2563EB]" />
            <p className="text-[13px] leading-relaxed text-[#5C607A]">
              <strong>Note:</strong> Third-party application charges are separate
              from your Sky Glass IPTV subscription. The official Android
              application cannot be installed directly on Apple devices.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
