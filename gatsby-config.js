/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'André Larsen - Developer Portfolio',
    description: "André Larsen's portfolio. Browse through my projects and feel free to contact me if you want to work with me",
    url: "https://andrelarsen.netlify.com/",
    twitterUsername: "@hamderandrew",
    ogImg: "/src/assets/favicon/favicon.ico"
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@favicon": "src/assets/favicon"
        },
        extensions: [
          //png's not working atm
        ]
      }
    },
  ]
}
