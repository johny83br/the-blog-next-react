import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  /* Descomentar essa linha para exportar para HTML: */
  /* Para exportar HTML: */
  // output: 'export',
  // basePath: '/blog-ssg-nextjs',
  // assetPrefix: '/blog-ssg-nextjs',
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;
