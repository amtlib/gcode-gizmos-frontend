module.exports = {
    distDir: 'build',
    staticPageGenerationTimeout: 1000,
    swcMinify: false,
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    }
}

