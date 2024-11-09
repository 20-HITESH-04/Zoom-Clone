/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
        ignoreBuildErrors: true
    }
};

// next.config.js
module.exports = {
    experimental: {
      esmExternals: "loose",
      transpilePackages: ["svix"],  // or try true if "loose" doesn't work
    },
  };  

export default nextConfig;
