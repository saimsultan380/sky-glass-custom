import Link from "next/link";
import { ArrowRight, MonitorSmartphone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { siteRoutes } from "@/lib/routes";

const DEVICES = [
  "Firestick and Fire TV Cube.",
  "Android TV, Google TV, Android TV boxes, Android phones and tablets.",
  "Formuler boxes and MYTVOnline.",
  "Samsung, LG, Sony, Hisense, TCL and Philips smart TVs.",
  "iPhone, iPad and Apple TV.",
  "Windows and Mac.",
  "Roku, MAG boxes and Enigma2 devices.",
] as const;

export function PopularDevicesSection() {
  return (
    <section
      id="popular-devices"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Find your{" "}
            <span className="text-gradient-brand">device</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-[1.6] text-[#5C607A] sm:mt-5 sm:text-base sm:leading-[1.75]">
            The{" "}
            <Link
              href={siteRoutes.installation}
              className="font-semibold text-[#0B0E2C] underline-offset-2 hover:underline"
            >
              installation guide
            </Link>{" "}
            covers:
          </p>
        </div>

        <ul className="mx-auto mt-6 grid max-w-3xl gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
          {DEVICES.map((device) => (
            <li key={device} className="glass-card flex items-start gap-3 p-4 sm:p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[20px] bg-[#7B2FFF]/10 text-[#7B2FFF]">
                <MonitorSmartphone className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <span className="text-[14px] font-medium leading-[1.55] text-[#0B0E2C] sm:text-[15px]">
                {device}
              </span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-5 max-w-3xl text-center text-[14px] leading-[1.6] text-[#5C607A] sm:mt-8 sm:text-base">
          The app you need depends on the exact device model and operating
          system. If you do not know which route applies, send the model number
          to support before installing or paying for a player.
        </p>

        <div className="mt-5 flex justify-center sm:mt-8">
          <Link
            href={siteRoutes.installation}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[20px] bg-gradient-brand px-6 py-2.5 text-[13px] font-semibold text-white sm:min-h-[48px] sm:text-[14px]"
          >
            Find Installation Steps for My Device
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
