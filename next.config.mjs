/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/servicios',
        destination: '/servicios/servicios-al-propietario/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
