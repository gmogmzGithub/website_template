const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    basePath: process.env.NODE_ENV === 'production' ? '/website_template' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/website_template' : '',
};

module.exports = withContentlayer(nextConfig);