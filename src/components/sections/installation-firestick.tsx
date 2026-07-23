import Link from "next/link";
import {
  Download,
  Settings2,
  CloudDownload,
  Package,
  LogIn,
  Headphones,
  ArrowRight,
  MonitorCheck,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    title: "Install Downloader",
    icon: Download,
    color: "#FF6B2C",
    items: [
      "Open Find or Search from the home screen.",
      "Search for 'Downloader'.",
      "Select and install the Downloader app.",
      "Open the application and allow requested permissions.",
    ],
  },
  {
    title: "Enable Permissions",
    icon: Settings2,
    color: "#E91E8C",
    items: [
      "Open Firestick Settings > My Fire TV.",
      "Open Developer Options.",
      "Select 'Install Unknown Apps'.",
      "Enable permission for Downloader.",
    ],
    note: "Developer Options hidden? Go to Settings > My Fire TV > About. Highlight device name and press select button 7 times.",
  },
  {
    title: "Download Official App",
    icon: CloudDownload,
    color: "#7B2FFF",
    items: [
      "Open Downloader.",
      "Enter the official download address or code: 2245820",
    ],
    warning: "Only use official links. Do not download from unknown sites.",
  },
  {
    title: "Install the Application",
    icon: Package,
    color: "#2563EB",
    items: [
      "Once downloaded, select Install.",
      "Wait for the process to finish.",
      "Select Done or Open.",
      "Delete the setup file to save space.",
    ],
  },
  {
    title: "Sign In",
    icon: LogIn,
    color: "#FF6B2C",
    items: [
      "Open Sky Glass IPTV app.",
      "Enter your supplied login details.",
      "Allow time for categories to load.",
    ],
  },
];

export function FirestickContent() {
  return (
    <div>
      <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[32px] sm:leading-[1.15] lg:text-[38px]">
        Install Sky Glass IPTV on{" "}
        <span className="text-gradient-brand">Firestick</span>
      </h2>
      <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-[15px] sm:leading-[1.75]">
        The official Sky Glass IPTV app can be installed on Amazon Fire TV Stick
        and other compatible Fire TV devices.
      </p>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2">
        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-[1px] bg-white p-5 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)] sm:p-6",
                idx === STEPS.length - 1 && "md:col-span-2"
              )}
              style={
                {
                  "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${step.color}10`,
                  "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${step.color}20`,
                } as React.CSSProperties
              }
            >
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] sm:h-11 sm:w-11"
                    style={{
                      color: step.color,
                      backgroundColor: `${step.color}15`,
                    }}
                  >
                    <Icon className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="min-w-0 flex-1 text-[14px] font-bold leading-snug text-[#0B0E2C] sm:text-lg">
                    {step.title}
                  </h3>
                  <span className="shrink-0 text-[10px] font-bold tracking-wider text-[#5C607A] sm:text-[12px]">
                    STEP {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <ul className="mt-2.5 flex-1 space-y-1.5 sm:mt-4 sm:space-y-2.5">
                  {step.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[13px] leading-snug text-[#5C607A] sm:gap-2.5 sm:text-[14px] sm:leading-relaxed"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: step.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {step.note && (
                  <div className="mt-3 flex items-start gap-2 rounded-[1px] bg-[#E91E8C]/5 p-3.5 text-[13px] text-[#0B0E2C] sm:mt-4 sm:p-3 sm:text-[12px]">
                    <MonitorCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#E91E8C] sm:h-4 sm:w-4" />
                    <p>{step.note}</p>
                  </div>
                )}

                {step.warning && (
                  <div className="mt-3 flex items-start gap-2 rounded-[1px] bg-[#FF6B2C]/5 p-3.5 text-[13px] text-[#0B0E2C] sm:mt-4 sm:p-3 sm:text-[12px]">
                    <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FF6B2C] sm:h-4 sm:w-4" />
                    <p>{step.warning}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 sm:mt-8">
        <Link
          href="/contact-us"
          className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[1px] bg-gradient-brand px-6 py-2.5 text-[13px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:min-h-[48px] sm:w-auto sm:py-3 sm:text-[14px]"
        >
          <Headphones className="h-4 w-4 shrink-0" strokeWidth={2} />
          Get Firestick Setup Help
          <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
