module.exports = {
    pathPrefix: "personal_website",
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "Teerapat (Ted) Chaiwachirasak",
    },
    plugins: [
        {
            resolve: `gatsby-plugin-less`,
            options: {
                javascriptEnabled: true,
            },
        },
        "gatsby-plugin-emotion",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "298093586",
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/favicon-32x32.png",
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        "gatsby-plugin-styled-components",
        "gatsby-plugin-scroll-reveal"
    ],
};
