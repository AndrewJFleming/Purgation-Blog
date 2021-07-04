module.exports = {
  siteMetadata: {
    title: `Purgation Blog`,
    description: `Blog featuring posts about how I produced the colorized images for the products at Purgation.site.`,
    author: `Andrew J Fleming`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://purgationblog.local/graphql`,
        develop: {
          hardCacheMediaFiles: true,
        },
        schema: {
          timeout: 120000, 
          requestConcurrency: 50, 
          perPage: 50,
        }
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
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Playfair Display\:400,400i,500i`,
          `roboto\:400,400i,500i`
        ],
        display: 'swap',
      },
    },
  ],
}