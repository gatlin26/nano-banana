/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['nano-gpt.com', 'storage.googleapis.com'],
    unoptimized: true, // For Replit deployment compatibility
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  // Configure for Replit deployment
  output: 'standalone',
  outputFileTracingRoot: process.cwd(),
  // Additional deployment settings for Replit
  trailingSlash: false,
  // Ensure proper handling of environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

}

export default nextConfig