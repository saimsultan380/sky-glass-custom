import type { NextConfig } from "next";

/**
 * Static export + trailing-slash canonical URLs.
 *
 * Note: `redirects` / `rewrites` are NOT supported with `output: "export"`.
 * WWW → non-WWW permanent redirects are configured in `vercel.json` for production.
 * Trailing-slash enforcement is handled by `trailingSlash: true` (308) on Vercel.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Allow phone / LAN devices to load /_next assets in `next dev`
  allowedDevOrigins: ["192.168.1.9"],
};

export default nextConfig;
