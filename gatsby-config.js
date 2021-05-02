const dotenv = require("dotenv")
if (process.env.NODE_ENV !== "production") {
    dotenv.config()
}
module.exports = {
    siteMetadata: {
        title: `Gatsby Blog`,
        author: {
            name: `H M Usman`
        },
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        }

    ],
}
