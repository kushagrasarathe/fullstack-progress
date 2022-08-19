/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  reactStrictMode: true,
  images: {
    // here you can add the url's that you are planning 
   // to use inside your next/image.
    domains: ["ipfs.io","images.unsplash.com"],
  },

}
