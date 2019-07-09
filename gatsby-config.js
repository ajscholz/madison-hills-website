module.exports = {
  siteMetadata: {
    title: `Madison Hills Christian Church`,
    shortName: `Madison Hills`,
    mission: `Something about disciples`,
    description: `A great church in a great place.`,
    pastor: `Ben Stroup`,
    phone: `859-575-1575`,
    email: `mhcc@madisonhills.org`,
    facebook: `madisonhills`,
    address: `960 Red House Rd.`,
    City: `Richmond`,
    State: `KY`,
    Zip: `40475`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1d9639`,
        theme_color: `#1d9639`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
