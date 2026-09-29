import { Hash } from "lucide-react";

/** Downloader by AFTVnews code for Firestick, Fire TV and Android TV. */
export const DOWNLOADER_CODE = "9557305";

type DownloaderCodeCardProps = {
  deviceLabel: string;
};

export function DownloaderCodeCard({ deviceLabel }: DownloaderCodeCardProps) {
  return (
    <div className="glass-card card-hover-lift overflow-hidden p-5 sm:p-6">
      <div className="flex items-start gap-3 sm:gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] bg-[#FF6B2C]/10 text-[#FF6B2C] sm:h-11 sm:w-11">
          <Hash className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#5C607A] sm:text-[13px]">
            Downloader code · {deviceLabel}
          </p>
          <p className="mt-1.5 text-[28px] font-bold leading-none tracking-tight text-gradient-brand sm:text-[34px]">
            {DOWNLOADER_CODE}
          </p>
          <p className="mt-3 text-[13px] leading-[1.55] text-[#5C607A] sm:text-[14px] sm:leading-[1.65]">
            Open Downloader by AFTVnews, enter this code, then install the
            supplied app. The code is for download only — it does not activate a
            trial or subscription.
          </p>
        </div>
      </div>
    </div>
  );
}
