/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "cdn.discordapp.com"
        ]
    },
    eslint: {
        ignoreDuringBuilds: true,
      },
      typescript: {
        ignoreBuildErrors: true,
      },
      
}

module.exports = nextConfig
