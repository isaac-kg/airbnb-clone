/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**.muscache.com',
            },
          ],
    }
}

module.exports = nextConfig
