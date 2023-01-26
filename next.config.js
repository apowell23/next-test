/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains: ['cdn.mediavalet.com'],
  }
}

module.exports = nextConfig
