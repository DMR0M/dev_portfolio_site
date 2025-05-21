/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- Enable static export for Netlify

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
