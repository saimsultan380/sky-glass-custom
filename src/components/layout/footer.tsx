import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { BrandLogo } from "@/components/brand-logo";
import {
  siteConfig,
  whatsappFreeTrialUrl,
  whatsappUrl,
} from "@/lib/site";
import { siteRoutes } from "@/lib/routes";

const FOOTER_LINKS = {
  service: [
    { label: "Home", href: siteRoutes.home },
    { label: "Plans", href: siteRoutes.plans },
    { label: "Installation Guide", href: siteRoutes.installation },
    { label: "Reseller", href: siteRoutes.reseller },
    { label: "Contact", href: siteRoutes.contact },
  ],
  support: [
    { label: "Subscription Plans", href: siteRoutes.plans },
    { label: "Free Trial", href: whatsappFreeTrialUrl() },
    { label: "Device Compatibility", href: `${siteRoutes.home}#popular-devices` },
    { label: "FAQ", href: `${siteRoutes.home}#faq` },
    { label: "WhatsApp Support", href: whatsappUrl() },
  ],
} as const;

export function Footer() {
  return (
    <footer className="border-t border-[#0B0E2C]/10 bg-transparent pb-8 pt-16 sm:pt-20 lg:pt-24">
      <Container animate={false}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href={siteRoutes.home} className="inline-flex items-center">
              <BrandLogo heightClassName="h-9 sm:h-11" />
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-[1.7] text-[#5C607A]">
              Explore available entertainment, compare subscription options and
              find assistance for your viewing device.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[15px] font-medium text-[#0B0E2C] transition-colors hover:text-[#E91E8C]"
              >
                <MessageCircle className="h-5 w-5 text-[#E91E8C]" />
                WhatsApp Support
              </a>
              <br />
              <a
                href={`tel:+${siteConfig.phoneDigits}`}
                className="inline-flex items-center gap-2.5 text-[15px] font-medium text-[#0B0E2C] transition-colors hover:text-[#E91E8C]"
              >
                <Phone className="h-5 w-5 text-[#E91E8C]" />
                {siteConfig.phone}
              </a>
              <br />
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2.5 text-[15px] font-medium text-[#0B0E2C] transition-colors hover:text-[#7B2FFF]"
              >
                <Mail className="h-5 w-5 text-[#7B2FFF]" />
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:pl-10">
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group}>
                <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#0B0E2C]">
                  {group === "service" ? "Service" : "Support"}
                </h3>
                <ul className="mt-6 space-y-4">
                  {links.map((link) => {
                    const isExternal = link.href.startsWith("http");
                    if (isExternal) {
                      return (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[15px] text-[#5C607A] transition-colors hover:text-[#E91E8C]"
                          >
                            {link.label}
                          </a>
                        </li>
                      );
                    }
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[15px] text-[#5C607A] transition-colors hover:text-[#E91E8C]"
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-[#0B0E2C]/10 pt-10 sm:mt-20">
          <h3 className="text-[14px] font-bold text-[#0B0E2C]">
            Independent Service Notice
          </h3>
          <div className="mt-4 grid gap-5 text-[13px] leading-[1.7] text-[#5C607A] sm:grid-cols-2 lg:gap-8">
            <p>
              Sky Glass IPTV operates independently and has no affiliation,
              sponsorship or endorsement relationship with Sky UK Limited, Sky
              Group or the official Sky Glass product.
            </p>
            <p>
              Other companies’ names and products are referenced to explain
              identification or compatibility. Their trademarks remain the
              property of their respective owners.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#0B0E2C]/10 pt-8 sm:flex-row">
          <p className="text-[13px] text-[#5C607A]">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
