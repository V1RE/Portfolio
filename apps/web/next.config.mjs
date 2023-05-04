/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  reactStrictMode: true,

  /** We run eslint as a separate task in CI */
  eslint: { ignoreDuringBuilds: true },
};

export default config;
