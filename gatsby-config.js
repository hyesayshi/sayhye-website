/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: `/sayhye`, // for local dev only
  siteMetadata: {
    title: "SAY HYE",
    titleTemplate: "",
    // titleTemplate: `%s | SAYHYE.NET`,
    siteUrl: `https://sayhye.net`,
    tagline: `Design & Illustration of Hye Jin Lee`,
    email: `hyesayshi@gmail.com`,
    defaultBackground: `#aaf0d1`,
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
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `SAY HYE`,
    //     short_name: `SAYHYE`,
    //     start_url: `/`,
    //     background_color: `#f7f0eb`,
    //     theme_color: `#aaf0d1`,
    //     display: `standalone`,
    //     icon: `static/favicon.ico`, // need an image icon
    //   },
    // },
    `gatsby-plugin-offline`,
  ],
}
