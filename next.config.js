/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['nano-gpt.com', 'storage.googleapis.com'],
    unoptimized: false, // 移除 Replit 兼容性设置
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
  // 移除 Replit 特定的部署设置
  // output: 'standalone', // Vercel 不支持
  // outputFileTracingRoot: process.cwd(), // Vercel 不需要
  trailingSlash: false,
  // 确保环境变量正确传递
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
}

export default nextConfig