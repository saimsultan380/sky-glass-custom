import { Info } from "lucide-react";

export function SmartTvContent() {
  return (
    <div>
      <h3 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[32px] sm:leading-[1.15] lg:text-[38px]">
        Set Up a Samsung or{" "}
        <span className="text-gradient-brand">LG Smart TV</span>
      </h3>
      <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-[15px] sm:leading-[1.75]">
        Samsung and LG televisions normally require a compatible player from
        their respective application stores.
      </p>
      <p className="mt-3 text-[14px] leading-[1.6] text-[#5C607A] sm:text-[15px] sm:leading-[1.75]">
        Check player availability for your exact TV model before purchasing any
        activation. Some players have a separate fee set by their developer.
      </p>
      <p className="mt-3 text-[14px] leading-[1.6] text-[#5C607A] sm:text-[15px] sm:leading-[1.75]">
        Install the supported player and follow its account-configuration
        process using the information supplied for your subscription.
      </p>

      <div className="mt-6 glass-card p-5 sm:p-6">
        <div className="flex items-start gap-2.5 sm:gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] bg-[#E91E8C]/10 text-[#E91E8C]">
            <Info className="h-3.5 w-3.5" strokeWidth={1.75} />
          </span>
          <p className="text-[14px] leading-[1.55] text-[#5C607A] sm:text-[13px] sm:leading-relaxed">
            The Android installation file is not a direct replacement for a
            Samsung or LG application.
          </p>
        </div>
      </div>

    </div>
  );
}
