const withMDX = require("@next/mdx")

module.exports = withMDX({
    pageExtensions: ["js", "mdx"],
})

module.exports = {
    reactStrictMode: true,
    webpack5: false,

    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.node = {
                fs: "empty",
            }
        }

        config.module.rules.push({
            test: /\.md$/,
            loader: "frontmatter-markdown-loader",
            options: { mode: ["react-component"] },
        })

        return config
    },

    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
}
