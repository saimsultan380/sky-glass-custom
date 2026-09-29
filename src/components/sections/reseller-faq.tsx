import { FaqAccordionSection } from "./faq-section";

const RESELLER_FAQS = [
  {
    id: "minimum-panel",
    q: "What is the minimum to open a panel?",
    a: "You need to purchase at least 120 credits.",
  },
  {
    id: "credits-expire",
    q: "Do unused credits expire?",
    a: "No. Credits have no time limit. A customer subscription still has its own duration and expiry date after activation.",
  },
  {
    id: "twelve-month-credits",
    q: "How many credits does a 12-month account use?",
    a: "A 12-month subscription uses 12 credits under the stated one-credit-per-month rule. Confirm the eligible account type in the panel before activation.",
  },
  {
    id: "add-more-credits",
    q: "Can I add more credits later?",
    a: "Ask the reseller team for the current top-up price and purchase process.",
  },
  {
    id: "earnings-guaranteed",
    q: "Are reseller earnings guaranteed?",
    a: "No. Results depend on demand, your costs, retail pricing and customer support.",
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
