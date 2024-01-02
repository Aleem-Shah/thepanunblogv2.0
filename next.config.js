/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"], serverActions: true, },
    webpack(config) {
        config.experiments = { ...config.experiments, topLevelAwait: true };
        return config;
    },
    images:{
        remotePatterns:[
            {
                'protocol':'https',
                hostname:'img.clerk.com'
            }
        ]
        
    }
}

module.exports = nextConfig
