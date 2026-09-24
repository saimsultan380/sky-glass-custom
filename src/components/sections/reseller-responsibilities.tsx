import { Container } from "@/components/layout/container";

export function ResellerResponsibilities() {
  return (
    <section className="border-b border-[#0B0E2C]/10 bg-transparent py-10 sm:py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Plan Your{" "}
            <span className="text-gradient-brand">Customer Service</span>
          </h2>
          <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.75]">
            Your customers need clear information about their subscription,
            device setup and renewal date.
          </p>
          <p className="mt-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-[1.75]">
            Set prices with your costs and support workload in mind. Explain
            what is included, record the agreed duration and provide accurate
            setup information.
          </p>
          <p className="mt-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-[1.75]">
            Confirm any branding permissions under the reseller arrangement
            before using branded materials or making claims about ownership of
            the service.
          </p>
        </div>
      </Container>
    </section>
  );
}
