import { Laptop, Monitor, ShieldCheck, Check } from "lucide-react";

export function DesktopContent() {
  return (
    <div>
      <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[32px] sm:leading-[1.15] lg:text-[38px]">
        Set Up on{" "}
        <span className="text-gradient-brand">Windows PCs & Mac</span>
      </h2>
      <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-[15px] sm:leading-[1.75]">
        Access Sky Glass IPTV on your computer using a compatible application
        designed for desktop operating systems.
      </p>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-2">
        <div className="rounded-[1px] bg-white p-5 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(37,99,235,0.08)] sm:p-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#2563EB]/10 text-[#2563EB] sm:h-10 sm:w-10">
              <Monitor className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
            </span>
            <h3 className="text-base font-bold leading-snug text-[#0B0E2C] sm:text-xl">
              Windows Setup
            </h3>
          </div>
          <div className="mt-2.5 space-y-2.5 sm:mt-5 sm:space-y-4">
            <p className="text-[12px] font-semibold text-[#5C607A] sm:text-[14px]">
              Recommended Players:
            </p>
            <ul className="space-y-1.5 sm:space-y-2.5">
              {[
                "IBO Player (Microsoft Store)",
                "IPTV Smarters Expert",
                "Other Windows IPTV players",
              ].map((app) => (
                <li
                  key={app}
                  className="flex items-center gap-2 text-[14px] text-[#0B0E2C] sm:text-[14px]"
                >
                  <Check className="h-3.5 w-3.5 text-[#2563EB] sm:h-4 sm:w-4" />
                  {app}
                </li>
              ))}
            </ul>
            <div className="space-y-1.5 pt-1 sm:space-y-3 sm:pt-2">
              <p className="text-[13px] font-bold text-[#0B0E2C] sm:text-[14px]">
                Setup:
              </p>
              {[
                "Download player from Store or official site.",
                "Install and open the application.",
                "Choose login method and enter details.",
                "Save account and load categories.",
              ].map((step, i) => (
                <div key={i} className="flex gap-2 sm:gap-3">
                  <span className="text-[12px] font-bold text-[#2563EB] sm:text-[13px]">
                    {i + 1}.
                  </span>
                  <p className="text-[14px] text-[#5C607A] sm:text-[13px]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[1px] bg-white p-5 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(123,47,255,0.08)] sm:p-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#7B2FFF]/10 text-[#7B2FFF] sm:h-10 sm:w-10">
              <Laptop className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
            </span>
            <h3 className="text-base font-bold leading-snug text-[#0B0E2C] sm:text-xl">
              Mac Setup
            </h3>
          </div>
          <div className="mt-2.5 space-y-2.5 sm:mt-5 sm:space-y-4">
            <p className="text-[12px] font-semibold text-[#5C607A] sm:text-[14px]">
              Recommended Players:
            </p>
            <ul className="space-y-1.5 sm:space-y-2.5">
              {[
                "IBO Player Pro",
                "iPlayTV-compatible apps",
                "Other macOS IPTV players",
              ].map((app) => (
                <li
                  key={app}
                  className="flex items-center gap-2 text-[14px] text-[#0B0E2C] sm:text-[14px]"
                >
                  <Check className="h-3.5 w-3.5 text-[#7B2FFF] sm:h-4 sm:w-4" />
                  {app}
                </li>
              ))}
            </ul>
            <div className="space-y-1.5 pt-1 sm:space-y-3 sm:pt-2">
              <p className="text-[13px] font-bold text-[#0B0E2C] sm:text-[14px]">
                Setup:
              </p>
              {[
                "Install player from App Store or official source.",
                "Open application and select login method.",
                "Enter Sky Glass subscription info.",
                "Save and allow content to load.",
              ].map((step, i) => (
                <div key={i} className="flex gap-2 sm:gap-3">
                  <span className="text-[12px] font-bold text-[#7B2FFF] sm:text-[13px]">
                    {i + 1}.
                  </span>
                  <p className="text-[14px] text-[#5C607A] sm:text-[13px]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-start gap-2.5 rounded-[1px] border border-[#FF6B2C]/20 bg-[#FF6B2C]/5 p-5 sm:mt-6 sm:gap-3 sm:p-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#FF6B2C]/15 text-[#FF6B2C]">
          <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.75} />
        </span>
        <p className="text-[14px] leading-[1.55] text-[#5C607A] sm:text-[13px] sm:leading-relaxed">
          <strong>Security Tip:</strong> Only install IPTV software from
          official app stores or verified developer websites. Avoid installing
          unknown software from unverified sources.
        </p>
      </div>
    </div>
  );
}
