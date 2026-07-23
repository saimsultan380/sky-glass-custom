import { MonitorPlay, Smartphone, Check, Info } from "lucide-react";

export function AppleContent() {
  return (
    <div>
      <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[32px] sm:leading-[1.15] lg:text-[38px]">
        Set Up on{" "}
        <span className="text-[#7B2FFF]">Apple TV, iPhone & iPad</span>
      </h2>
      <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-[15px] sm:leading-[1.75]">
        Apple users can access Sky Glass IPTV through compatible applications
        available from the Apple App Store.
      </p>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-2">
        <div className="rounded-[1px] bg-white p-5 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(123,47,255,0.08)] sm:p-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#7B2FFF]/10 text-[#7B2FFF] sm:h-10 sm:w-10">
              <MonitorPlay className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
            </span>
            <h3 className="text-base font-bold leading-snug text-[#0B0E2C] sm:text-xl">
              Apple TV
            </h3>
          </div>
          <p className="mt-2.5 text-[12px] font-semibold text-[#5C607A] sm:mt-4 sm:text-sm">
            Recommended Players:
          </p>
          <ul className="mt-1.5 space-y-1.5 sm:mt-3 sm:space-y-2.5">
            {["IBO Player Pro", "iPlayTV", "Other tvOS IPTV apps"].map((app) => (
              <li
                key={app}
                className="flex items-center gap-2 text-[14px] text-[#0B0E2C] sm:text-[14px]"
              >
                <Check className="h-3.5 w-3.5 text-[#7B2FFF] sm:h-4 sm:w-4" />
                {app}
              </li>
            ))}
          </ul>

          <div className="mt-3 space-y-1.5 sm:mt-5 sm:space-y-3">
            <p className="text-[13px] font-bold text-[#0B0E2C] sm:text-[14px]">
              Setup Steps:
            </p>
            {[
              "Open the App Store.",
              "Search for a compatible IPTV player.",
              "Install and open the application.",
              "Select the supported login method.",
              "Enter the subscription information supplied after activation.",
              "Save the profile.",
              "Allow the available categories to load.",
            ].map((step, i) => (
              <div key={i} className="flex gap-2 sm:gap-3">
                <span className="text-[12px] font-bold text-[#7B2FFF] sm:text-[13px]">
                  {i + 1}.
                </span>
                <p className="text-[14px] text-[#5C607A] sm:text-[13px]">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[13px] leading-snug text-[#5C607A] sm:mt-4 sm:text-[13px] sm:leading-relaxed">
            The official Android application cannot be installed directly on
            Apple TV.
          </p>
        </div>

        <div className="rounded-[1px] bg-white p-5 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(233,30,140,0.08)] sm:p-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#E91E8C]/10 text-[#E91E8C] sm:h-10 sm:w-10">
              <Smartphone className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
            </span>
            <h3 className="text-base font-bold leading-snug text-[#0B0E2C] sm:text-xl">
              iPhone & iPad
            </h3>
          </div>
          <p className="mt-2.5 text-[12px] font-semibold text-[#5C607A] sm:mt-4 sm:text-sm">
            Recommended Players:
          </p>
          <ul className="mt-1.5 space-y-1.5 sm:mt-3 sm:space-y-2.5">
            {["iPlayTV AIO", "IBO Player Pro", "Other iOS IPTV apps"].map(
              (app) => (
                <li
                  key={app}
                  className="flex items-center gap-2 text-[14px] text-[#0B0E2C] sm:text-[14px]"
                >
                  <Check className="h-3.5 w-3.5 text-[#E91E8C] sm:h-4 sm:w-4" />
                  {app}
                </li>
              )
            )}
          </ul>

          <div className="mt-3 space-y-1.5 sm:mt-5 sm:space-y-3">
            <p className="text-[13px] font-bold text-[#0B0E2C] sm:text-[14px]">
              Setup Steps:
            </p>
            {[
              "Open the Apple App Store.",
              "Install your preferred IPTV player.",
              "Open the application.",
              "Select the required login or playlist method.",
              "Enter your subscription information.",
              "Save the profile.",
              "Wait for the available content to load.",
            ].map((step, i) => (
              <div key={i} className="flex gap-2 sm:gap-3">
                <span className="text-[12px] font-bold text-[#E91E8C] sm:text-[13px]">
                  {i + 1}.
                </span>
                <p className="text-[14px] text-[#5C607A] sm:text-[13px]">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[13px] leading-snug text-[#5C607A] sm:mt-4 sm:text-[13px] sm:leading-relaxed">
            Some applications may offer free trials, subscriptions or one-time
            activation fees through Apple. These application charges are separate
            from your IPTV subscription.
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-start gap-2.5 rounded-[1px] p-5 sm:mt-6 sm:gap-3 sm:p-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#2563EB]/10 text-[#2563EB]">
          <Info className="h-3.5 w-3.5" strokeWidth={1.75} />
        </span>
        <p className="text-[14px] leading-[1.55] text-[#5C607A] sm:text-[13px] sm:leading-relaxed">
          <strong>Note:</strong> Third-party application charges are separate
          from your Sky Glass IPTV subscription. The official Android
          application cannot be installed directly on Apple devices.
        </p>
      </div>
    </div>
  );
}
