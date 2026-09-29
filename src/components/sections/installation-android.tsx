import { DownloaderCodeCard } from "@/components/sections/downloader-code-card";

const ANDROID_STEPS = [
  "Open the Google Play Store and search for Downloader by AFTVnews, if available on your compatible device.",
  "Install and open Downloader, then grant the necessary permissions.",
  "Enter 9557305 and follow the prompts to install the Sky Glass app.",
  "Open the app, select Add Playlist and enter the account details supplied by support.",
  "Save, wait for the categories to load and test playback.",
];

export function AndroidContent() {
  return (
    <div>
      <h3 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[32px] sm:leading-[1.15] lg:text-[38px]">
        Android TV, Google TV, Android boxes, phones and{" "}
        <span className="text-gradient-brand">tablets</span>
      </h3>

      <div className="mt-5 sm:mt-6">
        <DownloaderCodeCard deviceLabel="Android TV & Android Devices" />
      </div>

      <ol className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
        {ANDROID_STEPS.map((step, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 glass-card p-4 sm:gap-4 sm:p-5"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2563EB]/10 text-[12px] font-bold text-[#2563EB] sm:h-9 sm:w-9 sm:text-[13px]">
              {idx + 1}
            </span>
            <p className="min-w-0 flex-1 text-[14px] leading-[1.6] text-[#5C607A] sm:text-[15px] sm:leading-[1.75]">
              {step}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-5 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-[15px] sm:leading-[1.75]">
        Installation menus and app availability vary by model. If your device
        cannot install Downloader or the app, send its exact model to support for
        an appropriate alternative.
      </p>

      <div className="mt-8 border-t border-[#0B0E2C]/10 pt-8 sm:mt-10 sm:pt-10">
        <h4 className="text-[18px] font-bold text-[#0B0E2C] sm:text-[22px]">
          Formuler boxes and MYTVOnline
        </h4>
        <div className="mt-4 space-y-3 text-[14px] leading-[1.6] text-[#5C607A] sm:space-y-4 sm:text-[15px] sm:leading-[1.75]">
          <p>
            Formuler is an Android-based device route, so start here rather than
            in the smart TV player section. If you use the device&apos;s MYTVOnline
            app, open it and tell support the Formuler model and MYTVOnline
            version. Ask for the account or portal information required by that
            app, enter it as instructed and allow the content to load.
          </p>
          <p>
            If you instead intend to use the Sky Glass Android app, confirm that
            route is supported on your Formuler model before installing it. You
            only need the setup method for the app you choose.
          </p>
        </div>
      </div>
    </div>
  );
}
