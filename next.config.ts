import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fix workspace root warning
  turbopack: {
    root: __dirname,
  },
  // Allow cross-origin requests in development
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable experimental features
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
