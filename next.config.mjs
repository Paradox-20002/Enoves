// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Empty turbopack config to acknowledge Turbopack usage
  turbopack: {},
  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
