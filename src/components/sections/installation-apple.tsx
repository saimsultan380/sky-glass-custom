import { MonitorPlay, Smartphone, Info } from "lucide-react";

export function AppleContent() {
  return (
    <div>
      <h3 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[32px] sm:leading-[1.15] lg:text-[38px]">
        Set Up Apple TV, iPhone or{" "}
        <span className="text-[#7B2FFF]">iPad</span>
      </h3>
      <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-[15px] sm:leading-[1.75]">
        Choose a supported application appropriate to your Apple device.
      </p>
      <p className="mt-3 text-[14px] leading-[1.6] text-[#5C607A] sm:text-[15px] sm:leading-[1.75]">
        Install it through the relevant application store, then configure your
        account using the player’s supported login method.
      </p>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-2">
        <div className="glass-card p-5 sm:p-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] bg-[#7B2FFF]/10 text-[#7B2FFF] sm:h-10 sm:w-10">
              <MonitorPlay className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
            </span>
            <h3 className="text-base font-bold leading-snug text-[#0B0E2C] sm:text-xl">
              Apple TV
            </h3>
          </div>
          <p className="mt-3 text-[14px] leading-[1.55] text-[#5C607A] sm:text-[13px] sm:leading-relaxed">
            Compatible tvOS player
          </p>
        </div>

        <div className="glass-card p-5 sm:p-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] bg-[#E91E8C]/10 text-[#E91E8C] sm:h-10 sm:w-10">
              <Smartphone className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
            </span>
            <h3 className="text-base font-bold leading-snug text-[#0B0E2C] sm:text-xl">
              iPhone & iPad
            </h3>
          </div>
          <p className="mt-3 text-[14px] leading-[1.55] text-[#5C607A] sm:text-[13px] sm:leading-relaxed">
            Compatible iOS player
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-start gap-2.5 rounded-[20px] p-5 sm:mt-6 sm:gap-3 sm:p-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] bg-[#2563EB]/10 text-[#2563EB]">
          <Info className="h-3.5 w-3.5" strokeWidth={1.75} />
        </span>
        <p className="text-[14px] leading-[1.55] text-[#5C607A] sm:text-[13px] sm:leading-relaxed">
          An Android application cannot be installed directly as an iOS or tvOS
          app. If you are unsure which player to use, ask support before paying
          for one.
        </p>
      </div>
    </div>
  );
}
