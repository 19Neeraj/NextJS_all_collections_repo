// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'firebasestorage.googleapis.com',
//           port: '3000',
//           pathname: '/account123/**',
//         },
//       ],
//     },
//   }

  module.exports = {
    images: {
      domains: ['firebasestorage.googleapis.com'],
    },
  }