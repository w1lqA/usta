import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/sveden", permanent: true },
      {
        source: "/about/documents",
        destination: "/sveden#dokumenty",
        permanent: true,
      },
      {
        source: "/about/licenses",
        destination: "/sveden#osnovnye-svedeniya",
        permanent: true,
      },
      { source: "/documents", destination: "/sveden#dokumenty", permanent: true },
    ];
  },
};

export default nextConfig;