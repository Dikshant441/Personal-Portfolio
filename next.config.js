/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Server Actions are enabled by default in Next.js 14+
};

module.exports = nextConfig;
