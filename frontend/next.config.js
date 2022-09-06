/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		backendUrl: "https://devinder-backend.herokuapp.com",
	},
};

module.exports = nextConfig;
