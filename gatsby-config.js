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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-168355100-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        /* exclude: ["/preview/**", "/do-not-track/me/too/"], */
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        /* optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID", */
        // Enables Google Optimize Experiment ID
        /* experimentId: "YOUR_GOOGLE_EXPERIMENT_ID", */
        // Set Variation ID. 0 for original 1,2,3....
        /* variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",*/
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        /* sampleRate: 5, */
        /* siteSpeedSampleRate: 10, */
        /* cookieDomain: "example.com", */
      },
    },
  ]
}
