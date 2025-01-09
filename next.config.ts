import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com", // Add the hostname you want to allow
      },
    ],
  },
};

export default nextConfig;
