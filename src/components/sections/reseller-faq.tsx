import { FaqAccordionSection } from "./faq-section";

const RESELLER_FAQS = [
  {
    id: "what-is-panel",
    q: "What is the Sky Glass IPTV Reseller Panel?",
    a: "It is an online dashboard that allows authorised resellers to create and manage eligible customer subscriptions using credits.",
  },
  {
    id: "previous-experience",
    q: "Do I need previous experience?",
    a: "No. Previous experience is helpful, but new resellers can learn the panel through the supplied guidance and assistance.",
  },
  {
    id: "how-credits-work",
    q: "How do credits work?",
    a: "Credits are deducted from your balance when you create or renew an eligible customer subscription. The required amount may vary according to the selected duration.",
  },
  {
    id: "set-own-prices",
    q: "Can I set my own customer prices?",
    a: "Resellers generally control their own retail prices and profit margins, subject to the terms of the reseller arrangement.",
  },
  {
    id: "small-package",
    q: "Can I start with a small package?",
    a: "Yes. A smaller package can be suitable for testing demand before purchasing a larger number of credits.",
  },
  {
    id: "add-more-credits",
    q: "Can I add more credits later?",
    a: "Additional credits can normally be purchased when your balance becomes low or your customer base grows.",
  },
  {
    id: "manage-renewals",
    q: "Can I manage customer renewals?",
    a: "Eligible customer subscriptions can be renewed through the panel using your available credit balance.",
  },
  {
    id: "receive-dashboard",
    q: "Do I receive my own dashboard?",
    a: "Yes. After activation, you receive private access information for your account.",
  },
  {
    id: "technical-support",
    q: "Is technical support available?",
    a: "Support is available for panel access, credit management, account creation and common reseller questions.",
  },
  {
    id: "begin-selling",
    q: "How quickly can I begin selling?",
    a: "You can begin after your account has been confirmed, panel access has been supplied and your credits are available.",
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
