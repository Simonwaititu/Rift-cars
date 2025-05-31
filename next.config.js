const TerserPlugin = require("terser-webpack-plugin")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      "v0.blob.vercel-storage.com",
      "www.car-logos.org",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.car-logos.org",
        pathname: "/wp-content/uploads/**",
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
  },
  experimental: {
    optimizeCss: false, // Disabled to avoid critters dependency issues
    optimizePackageImports: ["lucide-react", "date-fns", "lodash"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Optimize bundle size
  webpack(config, { dev, isServer }) {
    // Only run in production client builds
    if (!dev && !isServer) {
      // Enable tree shaking for lodash
      config.resolve.alias = {
        ...config.resolve.alias,
        "lodash-es": "lodash",
      }

      // Add terser for minification
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
      )
    }

    return config
  },
}

module.exports = nextConfig