import { Tv, Info, Check, MonitorPlay, Sparkles } from "lucide-react";

const COMPATIBLE_PLAYERS = [
  "IBO Player",
  "Cr7 Player",
  "IBO Player Pro",
  "Hot IPTV",
  "SmartOne IPTV",
  "Other supported IPTV players available in the Samsung App Store",
];

const SAMSUNG_STEPS = [
  "Open the application store on your Samsung television.",
  "Search for a compatible IPTV player.",
  "Install and open the selected application.",
  "Note the Device ID, MAC address or activation information displayed.",
  "Enter or upload your subscription information using the method supported by the application.",
  "Save the profile.",
  "Restart the application.",
  "Allow the available categories to load.",
];

const LG_STEPS = [
  "Open the LG Content Store.",
  "Search for a compatible IPTV player.",
  "Install and launch the selected application.",
  "Follow the on-screen activation instructions.",
  "Enter or upload your subscription information.",
  "Save the profile.",
  "Restart the application.",
  "Allow the available content to load.",
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

      <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-6">
        <div className="rounded-[1px] bg-white p-5 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(123,47,255,0.08)] sm:p-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#7B2FFF]/10 text-[#7B2FFF] sm:h-10 sm:w-10">
              <MonitorPlay
                className="h-3.5 w-3.5 sm:h-5 sm:w-5"
                strokeWidth={1.75}
              />
            </span>
            <h3 className="text-[14px] font-bold leading-snug text-[#0B0E2C] sm:text-lg">
              Compatible Players
            </h3>
          </div>
          <ul className="mt-2.5 grid gap-2.5 sm:mt-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3">
            {COMPATIBLE_PLAYERS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[14px] font-medium leading-snug text-[#0B0E2C] sm:gap-3 sm:text-[14px]"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#7B2FFF]/10 text-[#7B2FFF] sm:h-5 sm:w-5">
                  <Check
                    className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                    strokeWidth={3}
                  />
                </span>
                <span className="min-w-0">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="rounded-[1px] bg-white p-5 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(37,99,235,0.08)] sm:p-6">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#2563EB]/10 text-[#2563EB] sm:h-10 sm:w-10">
                <Tv className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
              </span>
              <h3 className="text-[14px] font-bold leading-snug text-[#0B0E2C] sm:text-base">
                Samsung TV Setup
              </h3>
            </div>
            <p className="mt-2.5 text-[13px] leading-snug text-[#5C607A] sm:mt-3 sm:text-[13px] sm:leading-relaxed">
              Samsung Smart TVs normally use compatible IPTV player applications
              rather than the official Android app.
            </p>
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

          <div className="rounded-[1px] bg-white p-5 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(233,30,140,0.08)] sm:p-6">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#E91E8C]/10 text-[#E91E8C] sm:h-10 sm:w-10">
                <Tv className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
              </span>
              <h3 className="text-[14px] font-bold leading-snug text-[#0B0E2C] sm:text-base">
                LG TV Setup
              </h3>
            </div>
            <p className="mt-2.5 text-[13px] leading-snug text-[#5C607A] sm:mt-3 sm:text-[13px] sm:leading-relaxed">
              LG Smart TVs use applications available through the LG Content
              Store. Compatible players may include IBO Player, Cr7 Player, Hot
              IPTV, SmartOne IPTV and other supported IPTV players.
            </p>
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
            <p className="mt-2.5 text-[13px] leading-snug text-[#5C607A] sm:mt-3 sm:text-[12px] sm:leading-relaxed">
              Application availability depends on the television model, webOS
              version and region.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-4 sm:mt-8 sm:space-y-5">
        <div className="rounded-[1px] bg-white p-5 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(37,99,235,0.08)] sm:p-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#2563EB]/10 text-[#2563EB] sm:h-10 sm:w-10">
              <Sparkles
                className="h-3.5 w-3.5 sm:h-5 sm:w-5"
                strokeWidth={1.75}
              />
            </span>
            <h3 className="text-[14px] font-bold leading-snug text-[#0B0E2C] sm:text-lg">
              Other Smart TVs
            </h3>
          </div>
          <p className="mt-2 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-3 sm:text-[14px] sm:leading-relaxed">
            Android-based Smart TVs may be able to install the official Sky
            Glass IPTV application. Other Smart TV operating systems normally
            require a compatible IPTV player from the television application
            store.
          </p>
          <p className="mt-2 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-2.5 sm:text-[14px] sm:leading-relaxed">
            Possible options may include: IBO Player, Cr7 Player, Hot IPTV,
            SmartOne IPTV and other compatible playlist-based IPTV players.
          </p>
          <div className="mt-2.5 flex items-center gap-2 rounded-[1px] bg-[#2563EB]/5 p-3.5 text-[13px] text-[#2563EB] sm:mt-4 sm:p-3 sm:text-[12px]">
            <Sparkles className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
            <p>
              Check the television&apos;s operating system before choosing an
              installation method.
            </p>
          </div>
        </div>

        <div className="rounded-[1px] bg-white p-5 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(233,30,140,0.08)] sm:p-6">
          <div className="flex items-start gap-2.5 sm:gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#E91E8C]/10 text-[#E91E8C]">
              <Info className="h-3.5 w-3.5" strokeWidth={1.75} />
            </span>
            <p className="text-[14px] leading-[1.55] text-[#5C607A] sm:text-[13px] sm:leading-relaxed">
              <strong className="text-[#0B0E2C]">Player Fees:</strong> Some IPTV
              players require a separate activation payment to the developer.
              This is not included with your Sky Glass IPTV subscription.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          <div className="rounded-[1px] bg-white p-5 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(123,47,255,0.08)] sm:p-6">
            <div className="flex items-start gap-2.5 sm:gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#7B2FFF]/10 text-[#7B2FFF]">
                <Tv className="h-3.5 w-3.5" strokeWidth={1.75} />
              </span>
              <p className="text-[14px] leading-[1.55] text-[#5C607A] sm:text-[13px] sm:leading-relaxed">
                <strong className="text-[#0B0E2C]">
                  Hisense and VIDAA Devices:
                </strong>{" "}
                Hisense televisions using VIDAA require a compatible IPTV player
                from the VIDAA application store. Install the player, note any
                activation details shown and enter your subscription information
                using the method supported by the application.
              </p>
            </div>
          </div>
          <div className="rounded-[1px] bg-white p-5 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(37,99,235,0.08)] sm:p-6">
            <div className="flex items-start gap-2.5 sm:gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#2563EB]/10 text-[#2563EB]">
                <Tv className="h-3.5 w-3.5" strokeWidth={1.75} />
              </span>
              <p className="text-[14px] leading-[1.55] text-[#5C607A] sm:text-[13px] sm:leading-relaxed">
                <strong className="text-[#0B0E2C]">
                  Sony, Philips and TCL Devices:
                </strong>{" "}
                Newer models may use Android TV or Google TV and can install the
                official application where supported. Availability varies by
                model and region, so check the operating system before choosing
                an installation method.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
