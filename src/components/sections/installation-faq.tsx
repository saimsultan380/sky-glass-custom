import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";

const INSTALL_FAQS: FaqItem[] = [
  {
    id: "account-details",
    q: "Do I need account details before watching?",
    a: "Yes. Installing a player alone does not provide access to your trial or subscription.",
  },
  {
    id: "official-app-every-device",
    q: "Can I use the official app on every device?",
    a: "No. It is intended for compatible Firestick and Android devices. Other platforms require supported alternatives.",
  },
  {
    id: "more-than-one-device",
    q: "Can I configure more than one device?",
    a: "You may configure compatible devices. Simultaneous viewing remains subject to your plan’s connection allowance.",
  },
  {
    id: "what-to-send",
    q: "What should I send when requesting help?",
    a: "Include your device model, application name, error message and the steps you have already tried. Avoid sending unnecessary personal or payment information.",
  },
];

export function InstallationFaq() {
  return (
    <FaqAccordionSection
      faqs={INSTALL_FAQS}
      defaultOpenId="account-details"
      title={
        <>
          Installation{" "}
          <span className="text-gradient-brand">FAQs</span>
        </>
      }
      description=""
      id="installation-faq"
    />
  );
}
