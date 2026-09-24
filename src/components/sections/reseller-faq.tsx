import { FaqAccordionSection } from "./faq-section";

const RESELLER_FAQS = [
  {
    id: "previous-experience",
    q: "Do I need previous experience?",
    a: "Previous experience can help, but new resellers can use the supplied guidance to learn the panel. You should be comfortable handling customer questions and basic setup enquiries.",
  },
  {
    id: "set-own-prices",
    q: "Can I set my own retail prices?",
    a: "Retail pricing is generally controlled by the reseller, subject to the terms of the arrangement.",
  },
  {
    id: "add-more-credits",
    q: "Can I purchase more credits?",
    a: "Additional credits can normally be purchased as your balance runs low or your requirements increase.",
  },
  {
    id: "renew-accounts",
    q: "Can I renew customer accounts?",
    a: "Eligible subscriptions can be renewed through the panel using the required credits.",
  },
  {
    id: "earnings-guaranteed",
    q: "Are earnings guaranteed?",
    a: "No. Results depend on customer demand, pricing, operating costs and how you manage the business.",
  },
];

export function ResellerFaq() {
  return (
    <FaqAccordionSection
      title={
        <>
          Reseller{" "}
          <span className="text-gradient-brand">FAQs</span>
        </>
      }
      description=""
      faqs={RESELLER_FAQS}
    />
  );
}
