/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: `/sayhye`,
  // assetPrefix: `/sayhye`,
  siteMetadata: {
    title: "SAY HYE",
    titleTemplate: ``,
    siteUrl: `https://sayhye.net`,
    tagline: `Design & Illustration of Hye Jin Lee`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              linkImagesToOriginal: false,
              quality: 50,
              withWebp: true,
              tracedSVG: true,
              loading: "lazy",
            },
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`
  ],
}
