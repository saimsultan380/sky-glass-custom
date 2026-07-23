import { Container } from "@/components/layout/container";
import {
  UserPlus,
  Settings2,
  Wallet,
  CalendarClock,
  RefreshCw,
  ShieldCheck,
  LayoutDashboard,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Customer Account Creation",
    description:
      "Create new customer accounts and select the required subscription duration through the reseller dashboard.",
    icon: UserPlus,
    color: "#7B2FFF",
  },
  {
    title: "Subscription Management",
    description:
      "Review active subscriptions, monitor expiry information and organise customer renewals more effectively.",
    icon: Settings2,
    color: "#E91E8C",
  },
  {
    title: "Credit Balance",
    description:
      "View your available reseller credit balance and plan future activations before your credits run low.",
    icon: Wallet,
    color: "#FF6B2C",
  },
  {
    title: "Multiple Subscription Durations",
    description:
      "Offer different subscription periods based on the available reseller options. This allows customers to choose a duration that matches their requirements.",
    icon: CalendarClock,
    color: "#2563EB",
  },
  {
    title: "Account Renewal",
    description:
      "Renew eligible customer subscriptions through the panel using your available reseller credits.",
    icon: RefreshCw,
    color: "#7B2FFF",
  },
  {
    title: "Secure Panel Access",
    description:
      "Access your reseller dashboard using private login information supplied after activation.",
    icon: ShieldCheck,
    color: "#E91E8C",
  },
  {
    title: "Organised Dashboard",
    description:
      "The panel presents customer, subscription and credit information in a clear format, helping you complete routine tasks more efficiently.",
    icon: LayoutDashboard,
    color: "#FF6B2C",
    className: "md:col-span-2 lg:col-span-3",
  },
];

export function ResellerFeatures() {
  return (
    <section className="border-b border-[#0B0E2C]/10 bg-white py-6 sm:py-24 lg:py-32">
      <Container>
        <div className="text-center">
          <h2 className="text-[20px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Sky Glass IPTV{" "}
            <span className="text-gradient-brand">Reseller Panel Features</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-[1.55] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-[1.75]">
            The Sky Glass IPTV Reseller Panel provides the essential tools
            needed to manage a customer base.
          </p>
        </div>

        <div className="mt-5 grid gap-2.5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isWide =
              feature.className?.includes("col-span-2") ||
              feature.className?.includes("col-span-3");

            return (
              <article
                key={feature.title}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-3 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B0E2C]/20 hover:shadow-[var(--card-shadow-hover)] sm:p-8",
                  feature.className
                )}
                style={
                  {
                    "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${feature.color}1A`,
                    "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${feature.color}33`,
                  } as React.CSSProperties
                }
              >
                <div
                  className={cn(
                    "relative z-10 flex h-full flex-1 flex-col",
                    isWide && "md:flex-row md:items-center md:gap-8"
                  )}
                >
                  <div className="flex items-center gap-2.5 sm:gap-4">
                    <div
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#0B0E2C]/10 bg-white shadow-sm sm:h-14 sm:w-14 sm:rounded-[8px]",
                        isWide && "md:h-16 md:w-16"
                      )}
                      style={{ color: feature.color }}
                    >
                      <Icon
                        className={cn(
                          "h-4 w-4 sm:h-7 sm:w-7",
                          isWide && "md:h-8 md:w-8"
                        )}
                      />
                    </div>
                    <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-xl">
                      {feature.title}
                    </h3>
                  </div>
                  <p
                    className={cn(
                      "mt-2.5 flex-1 text-[12px] leading-[1.5] text-[#5C607A] sm:mt-6 sm:text-[15px] sm:leading-relaxed",
                      isWide && "md:mt-0"
                    )}
                  >
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
