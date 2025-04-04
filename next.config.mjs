/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: { unoptimized: true },
    assetPrefix: process.env.BASE || "",
};

export default nextConfig;
