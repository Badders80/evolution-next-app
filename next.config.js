/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
	},
	transpilePackages: ['@futureverse/portal', '@futureverse/sso'],
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback = {
				...config.resolve.fallback,
				fs: false,
				net: false,
				tls: false,
			};
		}
		return config;
	},
};

export default nextConfig;
