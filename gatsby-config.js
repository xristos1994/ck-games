/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require("path");

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MyGames`,
        short_name: `MyGames`,
        start_url: `/`,
        background_color: `#673ab7`,
        theme_color: `#673ab7`,
        display: `standalone`,
        icon: `src/images/favicons/icon.png`,
        icons: [
          {
            src: `src/images/favicons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/images/favicons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@core": path.resolve(__dirname, "src/@core"),
          "@components": path.resolve(__dirname, "src/components"),
          "@models": path.resolve(__dirname, "src/models"),
          "@store": path.resolve(__dirname, "src/store"),
          "@utils": path.resolve(__dirname, "src/utils"),
          "@hooks": path.resolve(__dirname, "src/hooks"),
          "@page-components": path.resolve(__dirname, "src/page-components"),
          "@images": path.resolve(__dirname, "src/images"),
          "@sounds": path.resolve(__dirname, "src/sounds"),
          "@interfaces": path.resolve(__dirname, "src/interfaces"),
        },
        extensions: [],
      },
    },
  ],
};
