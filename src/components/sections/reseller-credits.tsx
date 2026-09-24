import { Container } from "@/components/layout/container";

export function ResellerCredits() {
  return (
    <section className="border-b border-[#0B0E2C]/10 bg-transparent py-10 sm:py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            How the Credit System{" "}
            <span className="text-gradient-brand">Works</span>
          </h2>
          <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.75]">
            Credits are used when you activate or renew eligible customer
            subscriptions.
          </p>
          <p className="mt-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-[1.75]">
            The amount required can vary by subscription duration and available
            account type. Check the panel or package information before
            confirming an order with a customer.
          </p>
          <p className="mt-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-[1.75]">
            Keep track of your balance alongside upcoming renewals. This helps
            you decide when to discuss an additional credit purchase.
          </p>
        </div>
      </Container>
    </section>
  );
}
