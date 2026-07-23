"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Tv,
  MonitorSmartphone,
  MonitorPlay,
  Smartphone,
  Laptop,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { FirestickContent } from "@/components/sections/installation-firestick";
import { AndroidContent } from "@/components/sections/installation-android";
import { SmartTvContent } from "@/components/sections/installation-smart-tv";
import { AppleContent } from "@/components/sections/installation-apple";
import { DesktopContent } from "@/components/sections/installation-desktop";

type DeviceId = "firestick" | "android" | "smart-tv" | "apple" | "desktop";

type DeviceNavItem = {
  id: DeviceId;
  label: string;
  description: string;
  icon: LucideIcon;
  color: string;
  content: ReactNode;
};

const DEVICES: DeviceNavItem[] = [
  {
    id: "firestick",
    label: "Amazon Firestick & Fire TV",
    description: "Official app via Downloader",
    icon: Tv,
    color: "#FF6B2C",
    content: <FirestickContent />,
  },
  {
    id: "android",
    label: "Android TV & Android Devices",
    description: "Official app for TV, phone & tablet",
    icon: MonitorSmartphone,
    color: "#2563EB",
    content: <AndroidContent />,
  },
  {
    id: "smart-tv",
    label: "Samsung & LG Smart TVs",
    description: "Compatible IPTV players",
    icon: MonitorPlay,
    color: "#7B2FFF",
    content: <SmartTvContent />,
  },
  {
    id: "apple",
    label: "Apple TV, iPhone & iPad",
    description: "App Store IPTV players",
    icon: Smartphone,
    color: "#E91E8C",
    content: <AppleContent />,
  },
  {
    id: "desktop",
    label: "Windows PCs & Mac",
    description: "Compatible desktop players",
    icon: Laptop,
    color: "#0B0E2C",
    content: <DesktopContent />,
  },
];

function isMobileViewport() {
  return typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches;
}

export function InstallationDeviceGuide() {
  const [activeId, setActiveId] = useState<DeviceId>("firestick");
  const contentRef = useRef<HTMLDivElement>(null);
  const shouldScrollRef = useRef(false);

  const activeDevice = DEVICES.find((device) => device.id === activeId) ?? DEVICES[0];

  useEffect(() => {
    if (!shouldScrollRef.current) return;
    shouldScrollRef.current = false;

    if (!isMobileViewport() || !contentRef.current) return;

    const headerOffset = 88;
    const top =
      contentRef.current.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top, behavior: "smooth" });
  }, [activeId]);

  const selectDevice = (id: DeviceId) => {
    if (id === activeId && isMobileViewport()) {
      shouldScrollRef.current = true;
      if (contentRef.current) {
        const headerOffset = 88;
        const top =
          contentRef.current.getBoundingClientRect().top +
          window.scrollY -
          headerOffset;
        window.scrollTo({ top, behavior: "smooth" });
      }
      return;
    }

    shouldScrollRef.current = true;
    setActiveId(id);
  };

  return (
    <section
      id="device-guides"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-6 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-xl lg:text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C] sm:text-[12px]">
            Installation Guide
          </p>
          <h2 className="mt-1.5 text-[20px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Supported Devices for{" "}
            <span className="text-gradient-brand">Sky Glass IPTV</span>
          </h2>
          <p className="mt-3 text-[13px] leading-[1.55] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-[1.8]">
            Select your device to view the matching installation steps, player
            options and setup tips.
          </p>
        </div>

        <div className="mt-5 grid gap-4 lg:mt-10 lg:grid-cols-[minmax(260px,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-8 xl:gap-10">
          {/* Device navigation */}
          <nav
            aria-label="Device installation guides"
            className="lg:sticky lg:top-28"
          >
            <ul className="space-y-2 sm:space-y-2.5">
              {DEVICES.map((device) => {
                const Icon = device.icon;
                const isActive = device.id === activeId;
                return (
                  <li key={device.id}>
                    <button
                      type="button"
                      onClick={() => selectDevice(device.id)}
                      className={cn(
                        "group flex w-full items-center gap-2.5 rounded-[8px] border px-3 py-2.5 text-left transition-all duration-200 sm:gap-3 sm:px-3.5 sm:py-3.5",
                        isActive
                          ? "border-transparent bg-gradient-brand text-white shadow-[0_8px_24px_rgba(233,30,140,0.22)]"
                          : "border-[#0B0E2C]/10 bg-white shadow-[0_2px_10px_rgba(11,14,44,0.03)] hover:border-[#0B0E2C]/20 hover:bg-[#0B0E2C]/[0.02]"
                      )}
                      aria-pressed={isActive}
                    >
                      <span
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] sm:h-10 sm:w-10",
                          isActive
                            ? "bg-white/15 text-white"
                            : "border border-[#0B0E2C]/5"
                        )}
                        style={
                          isActive
                            ? undefined
                            : {
                                color: device.color,
                                backgroundColor: `${device.color}14`,
                              }
                        }
                      >
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={cn(
                            "block text-[13px] font-bold leading-snug sm:text-[14px]",
                            isActive ? "text-white" : "text-[#0B0E2C]"
                          )}
                        >
                          {device.label}
                        </span>
                        <span
                          className={cn(
                            "mt-0.5 block text-[11px] leading-snug sm:text-[12px]",
                            isActive ? "text-white/80" : "text-[#5C607A]"
                          )}
                        >
                          {device.description}
                        </span>
                      </span>
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 shrink-0 transition-colors",
                          isActive
                            ? "text-white"
                            : "text-[#0B0E2C]/25 group-hover:text-[#0B0E2C]/50"
                        )}
                        strokeWidth={2}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Content panel */}
          <div
            ref={contentRef}
            id={`install-${activeDevice.id}`}
            className="min-w-0 rounded-[8px] border border-[#0B0E2C]/10 bg-white p-3 sm:p-6 lg:p-8"
          >
            {activeDevice.content}
          </div>
        </div>
      </Container>
    </section>
  );
}
