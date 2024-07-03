/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {

        ignoreBuildErrors: true,
    },
    images: {
        domains: ['server.beyond4m.com'],
        remotePatterns: [{
                protocol: 'http',
                hostname: '127.0.0.1',
                // port: '',
                // pathname: '/account123/**',
            },
            {
                protocol: 'https',
                hostname: 'efac-5-193-21-208.ngrok-free.app',
                // port: '',
                // pathname: '/account123/**',
            },
            {
                protocol: 'https',
                hostname: 'beyondbackend-3.onrender.com',
                // port: '',
                // pathname: '/account123/**',
            },
            {
                protocol: 'https',
                hostname: 'server.beyond4m.com',
                // port: '',
                // pathname: '/account123/**',
            }
        ],
    },
};

export default nextConfig;