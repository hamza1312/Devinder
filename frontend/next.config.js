/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    backendUrl:'http://localhost:9000'
  }
}

module.exports = nextConfig
