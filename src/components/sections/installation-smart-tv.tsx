import { Tv, Info, Check, MonitorPlay, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";

const COMPATIBLE_PLAYERS = [
  "IBO Player",
  "Cr7 Player",
  "IBO Player Pro",
  "Hot IPTV",
  "SmartOne IPTV",
  "Other playlist-based players",
];

export function InstallationSmartTv() {
  return (
    <section
      id="install-smart-tv"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C]">
            Smart TV Setup
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Set Up on{" "}
            <span className="text-gradient-brand">Samsung & LG Smart TVs</span>
          </h2>
          <p className="mt-5 text-[15px] leading-[1.75] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.8]">
            Smart TVs normally use compatible IPTV player applications rather
            than the official Android application.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(123,47,255,0.08)] sm:p-8">
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center gap-3">
                <MonitorPlay className="h-6 w-6 text-[#7B2FFF]" />
                <h3 className="text-lg font-bold text-[#0B0E2C]">
                  Compatible Players
                </h3>
              </div>
              <ul className="mt-6 space-y-3">
                {COMPATIBLE_PLAYERS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[14px] font-medium text-[#0B0E2C]"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7B2FFF]/10 text-[#7B2FFF]">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[8px] border border-[#0B0E2C]/8 bg-[#0B0E2C]/[0.02] p-6">
              <h3 className="flex items-center gap-2 font-bold text-[#0B0E2C]">
                <Tv className="h-5 w-5 text-[#2563EB]" />
                Samsung TV Setup
              </h3>
              <ul className="mt-5 space-y-4">
                {[
                  "Open TV application store.",
                  "Search for a compatible player.",
                  "Install and note the Device ID/MAC.",
                  "Enter info via app website/portal.",
                  "Restart app and load content.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 text-[13px] text-[#5C607A]">
                    <span className="font-bold text-[#0B0E2C]">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[8px] border border-[#0B0E2C]/8 bg-[#0B0E2C]/[0.02] p-6">
              <h3 className="flex items-center gap-2 font-bold text-[#0B0E2C]">
                <Tv className="h-5 w-5 text-[#E91E8C]" />
                LG TV Setup
              </h3>
              <ul className="mt-5 space-y-4">
                {[
                  "Open LG Content Store.",
                  "Install selected IPTV player.",
                  "Follow on-screen activation.",
                  "Upload subscription details.",
                  "Restart player and start watching.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 text-[13px] text-[#5C607A]">
                    <span className="font-bold text-[#0B0E2C]">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:mt-16">
          <div className="rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#0B0E2C]">Other Smart TVs</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[#5C607A]">
              Sony, Philips, Hisense and TCL televisions using Android TV or
              Google TV can install the official app. For other systems, use a
              compatible player.
            </p>
            <div className="mt-5 flex items-center gap-2 rounded-[8px] bg-[#2563EB]/5 p-3 text-[12px] text-[#2563EB]">
              <Sparkles className="h-4 w-4 shrink-0" />
              <p>Check OS before choosing method.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 rounded-[8px] border border-[#0B0E2C]/10 p-5">
              <Info
                className="mt-0.5 h-5 w-5 shrink-0 text-[#E91E8C]"
                strokeWidth={1.75}
              />
              <p className="text-[13px] leading-relaxed text-[#5C607A]">
                <strong>Player Fees:</strong> Some IPTV players require a
                separate activation payment to the developer. This is not
                included in your Sky Glass IPTV plan.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-[8px] border border-[#0B0E2C]/10 p-5">
              <Tv
                className="h-5 w-5 shrink-0 text-[#7B2FFF]"
                strokeWidth={1.75}
              />
              <p className="text-[13px] leading-relaxed text-[#5C607A]">
                Hisense televisions using <strong>VIDAA</strong> require a
                compatible IPTV player from the VIDAA application store.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
