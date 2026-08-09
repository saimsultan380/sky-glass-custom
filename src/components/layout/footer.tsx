import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { BrandLogo } from "@/components/brand-logo";
import { siteConfig, whatsappUrl } from "@/lib/site";

const FOOTER_LINKS = {
  service: [
    { label: "Home", href: "/" },
    { label: "Plans", href: "/subscription-plans/" },
    { label: "Installation Guide", href: "/installation-guide/" },
    { label: "Reseller", href: "/reseller-panel/" },
    { label: "Contact", href: "/contact-us/" },
  ],
  support: [
    { label: "Subscription Plans", href: "/subscription-plans/" },
    { label: "Free Trial", href: "/contact-us/" },
    { label: "Device Compatibility", href: "/#popular-devices" },
    { label: "FAQ", href: "/#faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#0B0E2C]/10 bg-white pb-8 pt-16 sm:pt-20 lg:pt-24">
      <Container animate={false}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center">
              <BrandLogo heightClassName="h-9 sm:h-11" />
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-[1.7] text-[#5C607A]">
              Flexible IPTV for UK viewers — live television, sports, movies and
              series on Firestick, Android, Smart TVs, Apple devices and more.
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

          {/* Links Cols */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:pl-10">
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group}>
                <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#0B0E2C]">
                  {group === "service"
                    ? "Service"
                    : group === "support"
                      ? "Support"
                      : "Legal"}
                </h3>
                <ul className="mt-6 space-y-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-[#5C607A] transition-colors hover:text-[#E91E8C]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Notice */}
        <div className="mt-16 border-t border-[#0B0E2C]/10 pt-10 sm:mt-20">
          <h3 className="text-[14px] font-bold text-[#0B0E2C]">
            Independent Service Notice
          </h3>
          <div className="mt-4 grid gap-5 text-[13px] leading-[1.7] text-[#5C607A] sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <p>
              Sky Glass IPTV is an independent IPTV service and is not
              affiliated with, endorsed by, sponsored by or officially connected
              to Sky UK Limited, Sky Group, the official Sky Glass product or
              any of their parent companies, subsidiaries, broadcasters or
              associated brands.
            </p>
            <p>
              Any third-party names, trademarks, product names or device names
              mentioned on this website are used only for identification and
              compatibility information. All trademarks remain the property of
              their respective owners.
            </p>
            <p className="sm:col-span-2 lg:col-span-1">
              Sky Glass IPTV is the name of our independent service and should
              not be interpreted as representing Sky or an official Sky
              television product.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#0B0E2C]/10 pt-8 sm:flex-row">
          <p className="text-[13px] text-[#5C607A]">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="max-w-2xl text-center text-[12px] leading-relaxed text-[#5C607A] sm:text-right">
            Sky Glass IPTV is an independent service and is not affiliated with,
            endorsed by or connected to Sky UK Limited, Sky Group or the
            official Sky Glass product. All third-party trademarks belong to
            their respective owners.
          </p>
        </div>
      </Container>
    </footer>
  );
}
