const dotenv = require('dotenv');
const config = require('./src/data/config');

// Set up `dotenv` so that we can use `.env.development` and/or `.env.production` to store environment variables
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { title, siteUrl } = config;

module.exports = {
  siteMetadata: {
    siteUrl,
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-BMMPZY29ZL',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: title,
        start_url: '/',
        // background_color: fullConfig.theme.colors.white,
        // theme_color: fullConfig.theme.colors.white,
        display: 'minimal-ui',
        icon: 'static/favicon.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 90,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    // {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     projectId: '1edouzcx',
    //     dataset: 'production',
    //   },
    // },
  ],
};
