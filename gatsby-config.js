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
        },
        extensions: [],
      },
    },
  ],
};
