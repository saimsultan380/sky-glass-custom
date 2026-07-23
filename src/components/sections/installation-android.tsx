import {
  MonitorSmartphone,
  Smartphone,
  Download,
  Info,
  BadgeCheck,
  Check,
} from "lucide-react";

const ANDROID_TV_DEVICES = [
  "Android Smart TVs",
  "Google TV devices",
  "Android streaming boxes",
  "NVIDIA Shield",
  "Chromecast with Google TV",
  "Compatible Formuler devices",
];

const ANDROID_TV_STEPS = [
  "Open Google Play Store or the application section on your device.",
  "Check whether the supplied official application or installation utility is available.",
  "Install Downloader only when required by the supplied setup instructions.",
  "Allow the selected installation application to install external files if prompted.",
  "Enter the official download address or Downloader code 2245820.",
  "Download and install the application.",
  "Open the application.",
  "Enter your subscription information.",
];

const PHONE_STEPS = [
  {
    title: "Download File",
    body: "Download the official application file using the link supplied with your subscription. Only use the official installation source supplied by Sky Glass IPTV.",
    icon: Download,
    color: "#FF6B2C",
  },
  {
    title: "Allow Install",
    body: "Open the downloaded file and allow installation from the browser or file manager if prompted. If Android blocks the installation, open your device security settings and temporarily allow installations from the browser or file manager used to download the application.",
    icon: BadgeCheck,
    color: "#E91E8C",
  },
  {
    title: "Run Setup",
    body: "Select Install, then Open the Sky Glass IPTV application.",
    icon: MonitorSmartphone,
    color: "#7B2FFF",
  },
  {
    title: "Sign In",
    body: "Enter your login information and allow the available content categories to load.",
    icon: Smartphone,
    color: "#2563EB",
  },
];

export function AndroidContent() {
  return (
    <div>
      <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[32px] sm:leading-[1.15] lg:text-[38px]">
        Install on{" "}
        <span className="text-gradient-brand">Android & Google TV</span>
      </h2>
      <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-[15px] sm:leading-[1.75]">
        The official app is compatible with supported Android TV and Google TV
        devices.
      </p>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1px] bg-white p-5 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(37,99,235,0.08)] sm:p-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#2563EB]/10 text-[#2563EB] sm:h-10 sm:w-10">
              <MonitorSmartphone className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
            </span>
            <h3 className="text-[14px] font-bold leading-snug text-[#0B0E2C] sm:text-lg">
              Compatible Android TVs
            </h3>
          </div>
          <ul className="mt-2.5 space-y-2.5 sm:mt-5 sm:space-y-3">
            {ANDROID_TV_DEVICES.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[14px] font-medium leading-snug text-[#0B0E2C] sm:gap-3 sm:text-[14px]"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB] sm:h-5 sm:w-5">
                  <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" strokeWidth={3} />
                </span>
                <span className="min-w-0">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[1px] bg-white p-5 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(233,30,140,0.08)] sm:p-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#E91E8C]/10 text-[#E91E8C] sm:h-10 sm:w-10">
              <Download className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
            </span>
            <h3 className="text-[14px] font-bold leading-snug text-[#0B0E2C] sm:text-lg">
              Installation Method
            </h3>
          </div>
          <div className="mt-2.5 space-y-2 sm:mt-5 sm:space-y-3.5">
            {ANDROID_TV_STEPS.map((step, i) => (
              <div key={i} className="flex gap-2.5 sm:gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E91E8C]/10 text-[10px] font-bold text-[#E91E8C] sm:h-6 sm:w-6 sm:text-[12px]">
                  {i + 1}
                </span>
                <p className="text-[13px] leading-snug text-[#5C607A] sm:text-[14px] sm:leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 flex items-start gap-2 rounded-[1px] bg-[#0B0E2C]/5 p-3.5 text-[13px] text-[#5C607A] sm:mt-5 sm:p-4 sm:text-[13px]">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2563EB] sm:h-4 sm:w-4" />
            The exact menu names may differ according to the television
            manufacturer and Android version. Some Android devices may allow
            direct installation using the official application file supplied
            after activation.
          </p>
        </div>
      </div>

      <div className="mt-5 border-t border-[#0B0E2C]/8 pt-4 sm:mt-10 sm:pt-8">
        <h3 className="text-[18px] font-bold tracking-tight text-[#0B0E2C] sm:text-2xl">
          Android <span className="text-[#7B2FFF]">Phones & Tablets</span>
        </h3>
        <p className="mt-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-3 sm:text-[15px]">
          The official Sky Glass IPTV app can also be installed on compatible
          Android phones and tablets.
        </p>

        <div className="mt-3 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
          {PHONE_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-[1px] bg-white p-5 shadow-[var(--card-shadow)] sm:p-6"
                style={
                  {
                    "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${step.color}1A`,
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] sm:h-10 sm:w-10"
                    style={{
                      backgroundColor: `${step.color}15`,
                      color: step.color,
                    }}
                  >
                    <Icon className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
                  </span>
                  <h4 className="text-[13px] font-bold leading-snug text-[#0B0E2C] sm:text-[15px]">
                    {step.title}
                  </h4>
                </div>
                <p className="mt-2 text-[13px] leading-snug text-[#5C607A] sm:mt-2.5 sm:text-[13px] sm:leading-relaxed">
                  {step.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
