/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
      { hostname: "cloudflare-ipfs.com" },
    ],
  },
};

module.exports = nextConfig;
