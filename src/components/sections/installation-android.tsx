import {
  MonitorSmartphone,
  Smartphone,
  Download,
  Info,
  BadgeCheck,
  Check,
} from "lucide-react";
import { Container } from "@/components/layout/container";

const ANDROID_TV_DEVICES = [
  "Android Smart TVs",
  "Google TV devices",
  "Android streaming boxes",
  "NVIDIA Shield",
  "Chromecast with Google TV",
  "Compatible Formuler devices",
];

export function InstallationAndroid() {
  return (
    <section
      id="install-android"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C]">
            Android Devices
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Install on{" "}
            <span className="text-gradient-brand">Android & Google TV</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(37,99,235,0.08)] sm:p-8">
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center gap-3">
                <MonitorSmartphone className="h-6 w-6 text-[#2563EB]" />
                <h3 className="text-lg font-bold text-[#0B0E2C]">
                  Compatible Android TVs
                </h3>
              </div>
              <ul className="mt-6 space-y-3">
                {ANDROID_TV_DEVICES.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[14px] font-medium text-[#0B0E2C]"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB]">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#0B0E2C]">
              Installation Method
            </h3>
            <div className="mt-6 space-y-6">
              {[
                "Open Google Play Store or application section.",
                "Check for the official application availability.",
                "Install Downloader if required by instructions.",
                "Enter code 2245820 in Downloader.",
                "Download and install the app.",
                "Enter your subscription details.",
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E91E8C]/10 text-[12px] font-bold text-[#E91E8C]">
                    {i + 1}
                  </span>
                  <p className="text-[14px] leading-relaxed text-[#5C607A]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 flex items-start gap-2 rounded-[8px] bg-[#0B0E2C]/5 p-4 text-[13px] text-[#5C607A]">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" />
              Menu names may differ by manufacturer. Some devices allow direct
              installation using the official application file.
            </p>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[24px] font-bold tracking-tight text-[#0B0E2C] sm:text-3xl">
              Android <span className="text-[#7B2FFF]">Phones & Tablets</span>
            </h2>
            <p className="mt-4 text-[15px] text-[#5C607A]">
              The official Sky Glass IPTV app can also be installed on
              compatible Android phones and tablets.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Download File",
                body: "Download the official APK file using your unique activation link.",
                icon: Download,
                color: "#FF6B2C",
              },
              {
                title: "Allow Install",
                body: "Open file and allow installation from browser/file manager if prompted.",
                icon: BadgeCheck,
                color: "#E91E8C",
              },
              {
                title: "Run Setup",
                body: "Select Install and then Open the Sky Glass IPTV application.",
                icon: MonitorSmartphone,
                color: "#7B2FFF",
              },
              {
                title: "Sign In",
                body: "Enter your login info and allow available content categories to load.",
                icon: Smartphone,
                color: "#2563EB",
              },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 shadow-[0_4px_20px_rgba(11,14,44,0.02),0_8px_24px_rgba(11,14,44,0.04)] transition-all duration-300 hover:-translate-y-1"
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-[8px]"
                    style={{
                      backgroundColor: `${step.color}15`,
                      color: step.color,
                    }}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h4 className="mt-4 text-[15px] font-bold text-[#0B0E2C]">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5C607A]">
                    {step.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
