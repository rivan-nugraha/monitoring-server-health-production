import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  swcMinify: true,
  images: {
    domains: ['img.freepik.com'],
  },
};

export default nextConfig;
