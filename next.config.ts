import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "", // Optional, if not needed, leave empty
        pathname: "/**", // Allows all paths under the domain
      },
    ],
  },
};

export default nextConfig;
