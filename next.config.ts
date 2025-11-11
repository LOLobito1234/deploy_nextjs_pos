// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', 'deploy-pos-nestjs.onrender.com', 'res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'deploy-pos-nestjs-x6dn.onrender.com',
        port: '',
        pathname: '/assets/**'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/image/**'
      }
    ]
  }
};

export default nextConfig;