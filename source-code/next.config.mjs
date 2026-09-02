/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for JAMstack/Vercel/Netlify deployment
  output: "export",
  basePath: "/Pangasinan-Heritage-Digital-Showcase",

  // Optimize images (formats automatically handled for static export)
  images: {
    unoptimized: true, // required for static export; use Cloudinary/Imgix in production
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 768, 1024, 1280, 1536],
    imageSizes:  [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Strict React mode for better error surfacing
  reactStrictMode: true,

  // Compress output
  compress: true,

  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["react-icons"],
  },

  // Production browser source maps disabled for smaller bundle
  productionBrowserSourceMaps: false,
};

export default nextConfig;
