/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "model-site-wheat.vercel.app",
			},
		],
	},
};

module.exports = nextConfig;
