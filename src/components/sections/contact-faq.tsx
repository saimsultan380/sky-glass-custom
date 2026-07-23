import { FaqAccordionSection } from "./faq-section";

const CONTACT_FAQS = [
  {
    id: "request-trial",
    q: "How do I request a Sky Glass IPTV trial?",
    a: "Complete the contact form and select Request a 24-Hour Trial as the enquiry type. Include the device you plan to use.",
  },
  {
    id: "device-info",
    q: "What device information should I provide?",
    a: "Include the device category, model where known and the IPTV application you are using.",
  },
  {
    id: "choose-subscription",
    q: "Can you help me choose a subscription?",
    a: "Yes. Contact the support team with your preferred devices, viewing requirements and desired subscription duration.",
  },
  {
    id: "installation-support",
    q: "Is installation support available?",
    a: "Yes. Guidance is available for the official application on compatible Firestick and Android devices and for alternative IPTV players on other supported platforms.",
  },
  {
    id: "login-details",
    q: "What should I do if my login details are not working?",
    a: "Check the details carefully and ensure there are no additional spaces. Contact support if the issue continues.",
  },
  {
    id: "buffering",
    q: "Can I contact support about buffering?",
    a: "Yes. Include your device, application, internet connection type and whether the problem affects all content or selected streams.",
  },
  {
    id: "renew-subscription",
    q: "Can I renew my subscription through the contact page?",
    a: "Yes. Select Renewal or Upgrade and provide enough information for the team to locate your subscription.",
  },
  {
    id: "third-party-fees",
    q: "Are third-party IPTV player fees included?",
    a: "No. Some alternative IPTV applications charge their own activation or subscription fee. Those charges are separate from your plan.",
  },
];

export function ContactFaq() {
  return (
    <FaqAccordionSection
      title={
        <>
          Frequently Asked <span className="text-gradient-brand">Questions</span>
        </>
      }
      faqs={CONTACT_FAQS}
      description="Quick answers about trials, support requests, and troubleshooting."
    />
  );
}
