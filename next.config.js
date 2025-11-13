// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // This ensures that 404.html is generated for static hosting
  generateBuildId: () => 'build',
  // Using a custom domain (juansilva.is-a.dev), so no basePath needed
};

module.exports = nextConfig;
