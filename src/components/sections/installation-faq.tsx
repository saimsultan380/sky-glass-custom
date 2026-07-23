import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";

const INSTALL_FAQS: FaqItem[] = [
  {
    id: "firestick-app",
    q: "Is the official Sky Glass IPTV app available on Firestick?",
    a: "Yes. The official application can be installed on compatible Firestick and Fire TV devices using the supplied installation method.",
  },
  {
    id: "android-tv-app",
    q: "Can I install it on Android TV?",
    a: "Yes. The official application supports compatible Android TV, Google TV and Android streaming devices.",
  },
  {
    id: "android-phones-app",
    q: "Does it work on Android phones?",
    a: "Yes. The official application can be installed on compatible Android smartphones and tablets.",
  },
  {
    id: "smart-tv-app",
    q: "Can I install the official app on Samsung or LG televisions?",
    a: "Samsung and LG televisions normally use compatible IPTV player applications rather than the official Android app.",
  },
  {
    id: "apple-tv-app",
    q: "Which application should I use on Apple TV?",
    a: "You can use a compatible Apple TV IPTV player such as IBO Player Pro, iPlayTV or another supported application.",
  },
  {
    id: "desktop-app",
    q: "Can I use the service on Windows or Mac?",
    a: "Yes. Install a compatible IPTV player and enter the subscription information supplied after activation.",
  },
  {
    id: "player-cost",
    q: "Do alternative IPTV applications cost extra?",
    a: "Some third-party IPTV players charge a one-time fee or recurring subscription. Those charges are set by the application developer and are separate from your plan.",
  },
  {
    id: "multiple-devices",
    q: "Can I configure my subscription on multiple devices?",
    a: "You may configure the service on compatible devices. Simultaneous viewing depends on the number of connections included with your subscription.",
  },
  {
    id: "login-details",
    q: "Where do I receive my login details?",
    a: "Your installation and login information is supplied after your trial or subscription has been activated.",
  },
  {
    id: "install-support",
    q: "Is installation support available?",
    a: "Yes. Setup assistance is available for the official application and supported alternative IPTV players.",
  },
];

export function InstallationFaq() {
  return (
    <FaqAccordionSection
      faqs={INSTALL_FAQS}
      defaultOpenId="firestick-app"
      title={
        <>
          Installation{" "}
          <span className="text-gradient-brand">FAQs</span>
        </>
      }
      id="installation-faq"
    />
  );
}
