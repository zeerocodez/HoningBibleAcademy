import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Files in public/uploads are served as static assets and must not be bundled
  // into each server function. Keep local SQLite files for now so that this
  // change does not alter the existing development database behavior.
  outputFileTracingIncludes: {
    '/**': ['./prisma/dev.db', './dev.db'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
