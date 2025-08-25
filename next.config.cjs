// ...existing code...
/** @type {import('next').NextConfig} */
import webpack from 'webpack';

const nextConfig = {
  webpack: (config, { isServer }) => {
    return config;
  },
  // Cleaned: Removed Vite migration comments.
};

module.exports = nextConfig;
