import {
  Download,
  Settings2,
  Package,
  LogIn,
  Headphones,
  ArrowRight,
  CloudDownload,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/site";

const STEPS = [
  {
    title: "Obtain the Current Installation Instructions",
    icon: Download,
    color: "#FF6B2C",
    items: [
      "Use the download information supplied through the service’s support channel. Check that the instructions apply to your Fire TV model.",
    ],
  },
  {
    title: "Prepare the Device",
    icon: Settings2,
    color: "#E91E8C",
    items: [
      "Follow the supplied steps for obtaining the required installer and granting any necessary installation permission. Menu names can differ between Fire TV versions.",
    ],
  },
  {
    title: "Install the Application",
    icon: Package,
    color: "#7B2FFF",
    items: [
      "Use the supplied download address or code, complete installation and open the app.",
    ],
  },
  {
    title: "Enter Your Account Details",
    icon: LogIn,
    color: "#2563EB",
    items: [
      "Type the supplied information carefully. Check punctuation and remove accidental spaces.",
    ],
  },
  {
    title: "Allow the Categories to Load",
    icon: CloudDownload,
    color: "#FF6B2C",
    items: [
      "Wait for loading to finish before testing a stream. If the app reports an error, note the exact message before contacting support.",
    ],
  },
];

export function FirestickContent() {
  return (
    <div>
      <h3 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[32px] sm:leading-[1.15] lg:text-[38px]">
        Set Up Sky Glass IPTV on{" "}
        <span className="text-gradient-brand">Firestick</span>
      </h3>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2">
        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className={cn(
                "group relative flex flex-col overflow-hidden glass-card card-hover-lift p-5 hover:-translate-y-1 sm:p-6",
                idx === STEPS.length - 1 && "md:col-span-2"
              )}>
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] sm:h-11 sm:w-11"
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
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 sm:mt-8">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[20px] bg-gradient-brand px-6 py-2.5 text-[13px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:min-h-[48px] sm:w-auto sm:py-3 sm:text-[14px]"
        >
          <Headphones className="h-4 w-4 shrink-0" strokeWidth={2} />
          Get Firestick Setup Help
          <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
        </a>
      </div>
    </div>
  );
}
