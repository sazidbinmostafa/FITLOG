import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Matches any domain
      },
      {
        protocol: 'http',
        hostname: '**', // Optional: Matches HTTP domains as well
      },
    ],
  },
};

export default nextConfig;
