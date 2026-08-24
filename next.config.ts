import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` emits a plain HTML/CSS/JS site in `out/`
  // that can be hosted anywhere (Cloudflare Pages, Netlify, Vercel, GitHub Pages).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
