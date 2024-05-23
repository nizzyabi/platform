/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'utfs.io'
      },
      {
        hostname: 'www.nizzyabi.com'
      }
    ]
  }
}

module.exports = nextConfig
