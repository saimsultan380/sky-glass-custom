import { Container } from "@/components/layout/container";
import { whatsappUrl } from "@/lib/site";

export function ResellerPackages() {
  return (
    <section
      id="packages"
      className="border-b border-[#0B0E2C]/10 bg-transparent py-10 sm:py-16 lg:py-24"
    >
      <Container>
        <div className="mx-auto max-w-2xl glass-card p-5 text-center sm:p-10">
          <h2 className="text-[22px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[28px] sm:leading-[1.12]">
            Starting with{" "}
            <span className="text-gradient-brand">120 Credits</span>
          </h2>
          <p className="mt-3 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-5 sm:text-base sm:leading-[1.75]">
            Panel access starts with a minimum purchase of 120 credits. Ask the
            reseller team for the current price of those credits and the full
            panel terms before purchasing.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="border-gradient-brand mt-5 inline-flex min-h-[44px] items-center justify-center rounded-[20px] px-6 py-2.5 text-[13px] font-bold sm:mt-8 sm:min-h-[48px] sm:py-3 sm:text-[14px]"
          >
            <span className="text-gradient-brand">Ask About a Reseller Panel</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
