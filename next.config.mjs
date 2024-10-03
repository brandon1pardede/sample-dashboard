/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/234/capture-tools/post-engagements",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
