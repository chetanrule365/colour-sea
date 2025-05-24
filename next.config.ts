import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/colour-sea",
  assetPrefix: "/colour-sea/",
};

export default nextConfig;
