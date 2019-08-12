var proxy = require('http-proxy-middleware');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
    city: `Richmond`,
    state: `KY`,
    zip: `40475`,
    logo: `/images/logo.png`,
    url: `https://madison-hills.netlify.com`,
    twitterUsername: `madisonhillschr`,
    facebookUsername: `madisonhills`,
    instagramUsername: `madison.hills`,
    keywords: [`Richmond`, `church`, `christian`, `Jesus`],
  },
  developMiddleware: app => {
    app.use(
      '/.netlify/functions',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    );
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`src/components/layout.js`),
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-styled-components`,
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
    // {
    //   resolve: `gatsby-source-facebook`,
    //   options: {
    //     places: [`citynorthonline`], // Can be either a numeric ID or the URL ID
    //     params: {
    //       fields:
    //         'videos {title, created_time,description,embed_html,live_status,picture,source,thumbnails}', // See Facebooks API to see what you can query for
    //     },
    //     key:
    //       'EAAiSJe3aTfcBAAtnGZCifUZB4wzLOFyaNUUc418uLNhlb4MCZCbYwJHOw33P1cZAS0v4MGeNMDDIVLz7wg8OAbROwyLoVVZCOD2CkPuvSsvSFgS94iU0tVccxn3kO39vNccWZBgPGplylf63NHk4ZBPMOZAi44RLWMk6SD8RLihtzgOmYPuwlFZBS874hqLW2uWEZD', // You will need to create a Facebook application and go through review in order to get an API token.
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Madison Hills Christian Church`,
        short_name: `Madison Hills`,
        start_url: `/`,
        background_color: `#2db34b`,
        theme_color: `#2db34b`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
