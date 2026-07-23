import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Allow phone / LAN devices to load /_next assets in `next dev`
  allowedDevOrigins: ["192.168.1.9"],
};

export default nextConfig;
