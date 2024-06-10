/** @type {import('next').NextConfig} */
const nextConfig = {
    image: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lovely-flamingo-139.conver.cloud'
            },
            {
                protocol: 'https',
                hostname: 'necessary-rat-621.convex.cloud'
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.com'
            }
        ]
    }
};

export default nextConfig;


