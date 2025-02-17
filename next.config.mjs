/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Ensures static export
  distDir: 'dist',   // Output files to 'dist' folder
  trailingSlash: true, 
  images: {
    unoptimized: true,  // Required for static exports
  },
};

export default nextConfig;
