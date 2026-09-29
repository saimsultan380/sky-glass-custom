import { Container } from "@/components/layout/container";

export function SmarterIptvExperienceSection() {
  return (
    <section className="relative border-t border-[#0B0E2C]/10 bg-transparent">
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            What is Sky Glass{" "}
            <span className="text-gradient-brand">IPTV?</span>
          </h2>
          <div className="mt-3 space-y-3 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-5 sm:space-y-4 sm:text-base sm:leading-[1.75]">
            <p>
              Sky Glass IPTV is an independent internet-based TV service for UK
              viewers. An active account, a suitable app or player and a
              reliable internet connection let you browse the content available
              in your package.
            </p>
            <p>
              After your trial or order is confirmed, support provides the
              account information needed for your device. Installing an app on
              its own does not activate viewing.
            </p>
            <p>
              The service is independent of Sky UK Limited, Sky Group and the
              official Sky Glass television product.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
