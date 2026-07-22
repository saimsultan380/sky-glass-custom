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
import { Container } from "@/components/layout/container";
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

export function InstallationFirestick() {
  return (
    <section
      id="install-firestick"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C]">
            Firestick Setup
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Install Sky Glass IPTV on{" "}
            <span className="text-gradient-brand">Firestick</span>
          </h2>
          <p className="mt-5 text-[15px] leading-[1.75] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.8]">
            The official Sky Glass IPTV app can be installed on Amazon Fire TV
            Stick and other compatible Fire TV devices.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B0E2C]/20 hover:shadow-[var(--card-shadow-hover)]",
                  idx === STEPS.length - 1 && "md:col-span-2 lg:col-span-1"
                )}
                style={
                  {
                    "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${step.color}10`,
                    "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${step.color}20`,
                  } as React.CSSProperties
                }
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-[8px] border border-[#0B0E2C]/5"
                      style={{
                        color: step.color,
                        backgroundColor: `${step.color}15`,
                      }}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <span className="text-[12px] font-bold tracking-wider text-[#5C607A]">
                      STEP {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#0B0E2C]">
                    {step.title}
                  </h3>

                  <ul className="mt-4 flex-1 space-y-3">
                    {step.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-[14px] leading-relaxed text-[#5C607A]"
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
                    <div className="mt-5 flex items-start gap-2 rounded-[8px] bg-[#E91E8C]/5 p-3 text-[12px] text-[#0B0E2C]">
                      <MonitorCheck className="h-4 w-4 shrink-0 text-[#E91E8C]" />
                      <p>{step.note}</p>
                    </div>
                  )}

                  {step.warning && (
                    <div className="mt-5 flex items-start gap-2 rounded-[8px] bg-[#FF6B2C]/5 p-3 text-[12px] text-[#0B0E2C]">
                      <AlertCircle className="h-4 w-4 shrink-0 text-[#FF6B2C]" />
                      <p>{step.warning}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/contact-us"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[8px] bg-gradient-brand px-6 py-3 text-[14px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:w-auto"
          >
            <Headphones className="h-4 w-4 shrink-0" strokeWidth={2} />
            Get Firestick Setup Help
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
