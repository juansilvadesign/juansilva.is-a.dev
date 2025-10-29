// next.config.js
const isProd = process.env.NODE_ENV === 'production';
const usingGhSubpath = process.env.GITHUB_PAGES === 'true'; // set in Actions

const repo = 'juansilva.is-a.dev';

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
  // If you *don’t* use a custom domain and the site lives at
  // https://<user>.github.io/<repo>/, enable the lines below:
  basePath: isProd && usingGhSubpath ? `/${repo}` : undefined,
  assetPrefix: isProd && usingGhSubpath ? `/${repo}/` : undefined,
};

module.exports = nextConfig;
