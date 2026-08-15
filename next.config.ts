import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Never advertise the framework version in response headers. */
  poweredByHeader: false,

  /**
   * Canonical URL hygiene: one URL per page, no trailing-slash duplicates.
   * Search engines treat /about and /about/ as separate URLs otherwise.
   */
  trailingSlash: false,

  images: {
    /**
     * Serve modern formats. AVIF first (smallest), WebP as the fallback —
     * this is the single biggest Largest Contentful Paint win on an
     * image-heavy marketing site.
     */
    formats: ["image/avif", "image/webp"],
    /** Widths the optimizer will generate for `sizes`-driven responsive images. */
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1440, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    /** Cache optimized images at the CDN for 30 days. */
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
