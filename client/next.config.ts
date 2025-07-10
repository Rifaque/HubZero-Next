/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // Required for static export
  trailingSlash: true,        // Required for correct routing (/about/ not /about)
  images: {
    unoptimized: true,        // Required if using <Image> component
  },
  basePath: '',               // ✅ no basePath if you're serving at root "/"
};

module.exports = nextConfig;
