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
  // Enable static export for Replit deployments if needed
  // output: 'export',
  // trailingSlash: true,
  // skipTrailingSlashRedirect: true,
}

export default nextConfig