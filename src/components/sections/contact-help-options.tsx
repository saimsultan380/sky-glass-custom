import { Container } from "@/components/layout/container";
import { HelpCircle, Clock, MessageCircle, Monitor, Wrench, Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const helpOptions = [
  {
    title: "How Can We Help?",
    description:
      "The Sky Glass IPTV support team assists new and existing customers with:",
    icon: HelpCircle,
    color: "#E91E8C",
    list: [
      "Trial requests",
      "Subscription questions",
      "Device installation",
      "Application configuration",
      "Renewals and upgrades",
      "Common technical issues",
      "Reseller enquiries",
    ],
    footerText:
      "Choose the support category that best matches your enquiry and provide all relevant information in your message.",
  },
  {
    title: "Request a 24-Hour Trial",
    description:
      "A 24-hour trial allows you to evaluate the service using your normal device and internet connection before choosing a longer subscription.",
    icon: Clock,
    color: "#FF6B2C",
    listTitle: "During the trial, you can check:",
    list: [
      "Device compatibility",
      "Application performance",
      "Channel and category navigation",
      "General streaming stability",
      "Available picture quality",
      "Electronic Programme Guide functionality",
      "Ease of use",
    ],
    footerText:
      "For a more accurate test, use the same device, IPTV application and internet connection you plan to use after subscribing. Trial content and functionality may differ from a complete paid subscription.",
    link: { text: "Request Your 24-Hour Trial", url: "#contact-form" },
  },
  {
    title: "Subscription Assistance",
    description:
      "Contact the support team when you need help choosing between the available Sky Glass IPTV plans.",
    icon: MessageCircle,
    color: "#7B2FFF",
    listTitle: "Assistance is available for questions about:",
    list: [
      "Standard and Premium options",
      "Available subscription durations",
      "Supported devices",
      "Connection options",
      "Plan features",
      "Activation process",
      "Subscription renewals",
      "Upgrading an existing plan",
    ],
    link: { text: "Compare Subscription Plans", url: "/subscription-plans" },
  },
  {
    title: "Installation and Device Support",
    description:
      "The official Sky Glass IPTV application is available for compatible Firestick and Android devices. Alternative IPTV players can be used on supported Smart TVs, Apple devices, Windows PCs and Mac computers.",
    icon: Monitor,
    color: "#2563EB",
    listTitle: "Setup assistance is available for:",
    list: [
      "Amazon Fire TV Stick",
      "Fire TV devices",
      "Android TV",
      "Google TV",
      "Android boxes",
      "Android smartphones and tablets",
      "Samsung Smart TVs",
      "LG Smart TVs",
      "Other supported Smart TVs",
      "Apple TV",
      "iPhone and iPad",
      "Windows computers",
      "Mac and MacBook devices",
    ],
    link: { text: "View the Installation Guide", url: "/installation-guide" },
  },
  {
    title: "Technical Support",
    description:
      "Existing customers can contact support for common service and application issues.",
    icon: Wrench,
    color: "#E91E8C",
    listTitle: "Assistance may be available for:",
    list: [
      "Login difficulties",
      "Application configuration",
      "Content not loading",
      "Electronic Programme Guide issues",
      "Application installation",
      "Subscription activation",
      "Device compatibility",
      "Account renewal",
      "General playback problems",
    ],
    footerText:
      "Before contacting support, restart your device, IPTV application and internet router. This can resolve many temporary connection or application issues.",
    className: "md:col-span-2 lg:col-span-2",
  },
];

export function ContactHelpOptions() {
  return (
    <section className="border-b border-[#0B0E2C]/10 bg-white py-10 sm:py-16 lg:py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Support <span className="text-gradient-brand">Categories</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-[1.75]">
            Find the right assistance for your Sky Glass IPTV experience.
          </p>
        </div>

        <svg width="0" height="0" className="absolute" aria-hidden>
          <defs>
            <linearGradient
              id="contact-help-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#ff6b2c" />
              <stop offset="32%" stopColor="#e91e8c" />
              <stop offset="68%" stopColor="#7b2fff" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
        </svg>

        <div className="mt-6 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
          {helpOptions.map((option) => {
            const Icon = option.icon;
            const isWide = option.className?.includes("col-span-2");

            return (
              <article
                key={option.title}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-[1px] bg-white p-5 shadow-[var(--card-shadow)] card-hover-lift hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)] sm:p-8",
                  option.className
                )}
                style={
                  {
                    "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${option.color}1A`,
                    "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${option.color}33`,
                  } as React.CSSProperties
                }
              >
                <div className="relative z-10 flex h-full flex-1 flex-col">
                  <div className="flex items-center gap-2.5 sm:gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-white shadow-sm sm:h-14 sm:w-14 sm:rounded-[1px]"
                      style={{ color: option.color }}
                    >
                      <Icon className="h-4 w-4 sm:h-7 sm:w-7" />
                    </div>
                    <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-2xl">
                      {option.title}
                    </h3>
                  </div>

                  <p className="mt-2.5 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-relaxed">
                    {option.description}
                  </p>

                  {option.listTitle && (
                    <p className="mt-2.5 text-[14px] font-semibold text-[#0B0E2C] sm:mt-6 sm:text-base">
                      {option.listTitle}
                    </p>
                  )}

                  <ul
                    className={cn(
                      "mt-2.5 grid grid-cols-1 gap-x-4 gap-y-2.5 sm:mt-4 sm:gap-3",
                      isWide ? "sm:grid-cols-3" : "sm:grid-cols-2"
                    )}
                  >
                    {option.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 sm:gap-3"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0"
                          style={{ stroke: "url(#contact-help-gradient)" }}
                          strokeWidth={3}
                        />
                        <span className="min-w-0 text-[13px] leading-snug text-[#0B0E2C] sm:text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {option.footerText && (
                    <div className="mt-3 rounded-[1px] bg-[#F5F5F7] p-4 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-6 sm:p-4 sm:text-sm sm:leading-relaxed">
                      {option.footerText}
                    </div>
                  )}

                  {option.link && (
                    <div className="mt-auto pt-3 sm:pt-6">
                      <Link
                        href={option.link.url}
                        className="inline-flex text-[13px] font-bold text-[#7B2FFF] hover:underline sm:text-base"
                      >
                        {option.link.text}
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
