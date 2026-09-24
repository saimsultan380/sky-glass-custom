"use client";

import { useEffect } from "react";

type LegacyRedirectProps = {
  href: string;
};

export function LegacyRedirect({ href }: LegacyRedirectProps) {
  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-transparent">
      <p className="glass-card px-6 py-3 text-[15px] text-[#5C607A]">Redirecting…</p>
    </main>
  );
}
