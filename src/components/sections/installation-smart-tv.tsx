import { Tv, Info, Check, MonitorPlay, Sparkles } from "lucide-react";

const COMPATIBLE_PLAYERS = [
  "IBO Player",
  "Cr7 Player",
  "IBO Player Pro",
  "Hot IPTV",
  "SmartOne IPTV",
  "Other playlist-based players",
];

const SAMSUNG_STEPS = [
  "Open TV application store.",
  "Search for a compatible player.",
  "Install and note the Device ID/MAC.",
  "Enter info via app website/portal.",
  "Restart app and load content.",
];

const LG_STEPS = [
  "Open LG Content Store.",
  "Install selected IPTV player.",
  "Follow on-screen activation.",
  "Upload subscription details.",
  "Restart player and start watching.",
];

export function SmartTvContent() {
  return (
    <div>
      <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[32px] sm:leading-[1.15] lg:text-[38px]">
        Set Up on{" "}
        <span className="text-gradient-brand">Samsung & LG Smart TVs</span>
      </h2>
      <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-[15px] sm:leading-[1.75]">
        Smart TVs normally use compatible IPTV player applications rather than
        the official Android application.
      </p>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[1px] bg-white p-5 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(123,47,255,0.08)] sm:p-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#7B2FFF]/10 text-[#7B2FFF] sm:h-10 sm:w-10">
              <MonitorPlay className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
            </span>
            <h3 className="text-[14px] font-bold leading-snug text-[#0B0E2C] sm:text-lg">
              Compatible Players
            </h3>
          </div>
          <ul className="mt-2.5 space-y-2.5 sm:mt-5 sm:space-y-3">
            {COMPATIBLE_PLAYERS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[14px] font-medium leading-snug text-[#0B0E2C] sm:gap-3 sm:text-[14px]"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#7B2FFF]/10 text-[#7B2FFF] sm:h-5 sm:w-5">
                  <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" strokeWidth={3} />
                </span>
                <span className="min-w-0">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-4">
          <div className="rounded-[1px] bg-[#0B0E2C]/[0.02] p-5 sm:p-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#2563EB]/10 text-[#2563EB] sm:h-10 sm:w-10">
                <Tv className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
              </span>
              <h3 className="text-[14px] font-bold leading-snug text-[#0B0E2C] sm:text-base">
                Samsung TV Setup
              </h3>
            </div>
            <ul className="mt-2.5 space-y-1.5 sm:mt-4 sm:space-y-3">
              {SAMSUNG_STEPS.map((step, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-[14px] text-[#5C607A] sm:gap-3 sm:text-[13px]"
                >
                  <span className="font-bold text-[#0B0E2C]">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1px] bg-[#0B0E2C]/[0.02] p-5 sm:p-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#E91E8C]/10 text-[#E91E8C] sm:h-10 sm:w-10">
                <Tv className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
              </span>
              <h3 className="text-[14px] font-bold leading-snug text-[#0B0E2C] sm:text-base">
                LG TV Setup
              </h3>
            </div>
            <ul className="mt-2.5 space-y-1.5 sm:mt-4 sm:space-y-3">
              {LG_STEPS.map((step, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-[14px] text-[#5C607A] sm:gap-3 sm:text-[13px]"
                >
                  <span className="font-bold text-[#0B0E2C]">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-3 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
        <div className="rounded-[1px] bg-white p-5 sm:p-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#2563EB]/10 text-[#2563EB] sm:h-10 sm:w-10">
              <Sparkles className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
            </span>
            <h3 className="text-[14px] font-bold leading-snug text-[#0B0E2C] sm:text-lg">
              Other Smart TVs
            </h3>
          </div>
          <p className="mt-2 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-3 sm:text-[14px] sm:leading-relaxed">
            Sony, Philips, Hisense and TCL televisions using Android TV or
            Google TV can install the official app. For other systems, use a
            compatible player.
          </p>
          <div className="mt-2.5 flex items-center gap-2 rounded-[1px] bg-[#2563EB]/5 p-3.5 text-[13px] text-[#2563EB] sm:mt-4 sm:p-3 sm:text-[12px]">
            <Sparkles className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
            <p>Check OS before choosing method.</p>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-start gap-2.5 rounded-[1px] p-4 sm:gap-3 sm:p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#E91E8C]/10 text-[#E91E8C]">
              <Info className="h-3.5 w-3.5" strokeWidth={1.75} />
            </span>
            <p className="text-[14px] leading-[1.55] text-[#5C607A] sm:text-[13px] sm:leading-relaxed">
              <strong>Player Fees:</strong> Some IPTV players require a separate
              activation payment to the developer. This is not included in your
              Sky Glass IPTV plan.
            </p>
          </div>
          <div className="flex items-start gap-2.5 rounded-[1px] p-4 sm:gap-3 sm:p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#7B2FFF]/10 text-[#7B2FFF]">
              <Tv className="h-3.5 w-3.5" strokeWidth={1.75} />
            </span>
            <p className="text-[14px] leading-[1.55] text-[#5C607A] sm:text-[13px] sm:leading-relaxed">
              Hisense televisions using <strong>VIDAA</strong> require a
              compatible IPTV player from the VIDAA application store.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
