import type {NextConfig} from 'next';

const isProd = process.env.NODE_ENV === 'production';

// You may need to change this to match your repository name
const repoName = 'Portfolio';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Required for Github Pages
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
};

module.exports = nextConfig;
