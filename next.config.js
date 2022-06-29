// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true,
    newNextLinkBehavior: true,
    images: { allowFutureImage: true },
  },
};

module.exports = nextConfig;
