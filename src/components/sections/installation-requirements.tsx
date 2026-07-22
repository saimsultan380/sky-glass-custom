import { Check, ShieldAlert, KeyRound } from "lucide-react";
import { Container } from "@/components/layout/container";

const REQUIREMENTS = [
  "An active Sky Glass IPTV subscription or trial",
  "A compatible internet-connected device",
  "A stable broadband connection",
  "Your subscription login information",
  "Access to your device’s application store or installation settings",
  "Enough storage space for the selected application",
];

const ACTIVATION_DATA = [
  "Username",
  "Password",
  "Server address",
  "Portal address",
  "Playlist link",
  "Device activation information",
];

export function InstallationRequirements() {
  return (
    <section
      id="before-start"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C]">
            Preparation
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Before You Begin the{" "}
            <span className="text-gradient-brand">Installation</span>
          </h2>
          <p className="mt-5 text-[15px] leading-[1.75] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.8]">
            Make sure you have the following before setting up Sky Glass IPTV:
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(123,47,255,0.08)] sm:p-8 md:col-span-2 lg:col-span-2">
            <div className="relative z-10 flex h-full flex-col">
              <h3 className="text-lg font-bold text-[#0B0E2C]">
                Checklist for Setup
              </h3>
              <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {REQUIREMENTS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px] font-medium leading-snug text-[#0B0E2C]"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7B2FFF]/10 text-[#7B2FFF]">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(233,30,140,0.08)] sm:p-8">
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center gap-3">
                <KeyRound className="h-5 w-5 text-[#E91E8C]" strokeWidth={2} />
                <h3 className="text-lg font-bold text-[#0B0E2C]">
                  Activation Info
                </h3>
              </div>
              <p className="mt-3 text-[13px] leading-[1.6] text-[#5C607A]">
                Your info may include:
              </p>
              <ul className="mt-4 space-y-2.5">
                {ACTIVATION_DATA.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[14px] font-semibold text-[#0B0E2C]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E91E8C]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-[8px] border border-[#FF6B2C]/20 bg-[#FF6B2C]/5 p-5 sm:mt-12 sm:p-6">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF6B2C] text-white">
              <ShieldAlert className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[14px] font-bold text-[#0B0E2C] sm:text-base">
                Security Warning
              </p>
              <p className="mt-1 text-[13px] leading-[1.7] text-[#5C607A] sm:text-[14px]">
                Keep your login details private and enter them only into the
                official Sky Glass IPTV application or a compatible IPTV player
                you trust. The exact information depends on the application being
                used.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
