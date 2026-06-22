import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",          // Generates static HTML in /out
  basePath: isProd ? "/portfolio" : "",   // Sub-path on GitHub Pages
  assetPrefix: isProd ? "/portfolio/" : "",
  images: {
    unoptimized: true,       // Required for static export (no image server)
  },
};

export default nextConfig;
