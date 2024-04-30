/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'utfs.io'
      }
    ]
  }
}

module.exports = nextConfig
