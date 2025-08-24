// ...existing code...
/** @type {import('next').NextConfig} */
import webpack from 'webpack';

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Alias for buffer (like in Vite)
    config.resolve.alias['buffer'] = require.resolve('buffer');

    // Polyfills/shims (globalThis is native, but ensure global and process.env)
    config.resolve.fallback = {
      ...config.resolve.fallback,
      buffer: require.resolve('buffer'),
    };

    // Define globals (mimics Vite's define)
    config.plugins.push(
      new webpack.DefinePlugin({
        global: 'globalThis',
        'process.env': '{}', // Empty object if no env vars; Next.js handles real env separately
      })
    );

    // Optimize deps inclusion (like Vite's optimizeDeps)
    if (!isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          default: false,
        },
      };
    }

    // Build options (no externals needed, as in Vite)
    return config;
  },
};

module.exports = nextConfig;
