module.exports = {
  siteMetadata: {
    siteUrl: 'https://darinlevesque.com',
    title: 'Resume for Darin Levesque',
    author: 'Darin Levesque',
    description: 'A resume website for Darin Levesque',
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://darinlevesque.com',
        sitemap: 'https://darinlevesque.com/sitemap.xml',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/dl6.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'SpaceX',
        fieldName: 'spacex',
        url: 'https://api.spacex.land/graphql/',
        // refetch interval in seconds
        refetchInterval: 500,
        // A `fetch`-compatible API to use when making requests.
        // fetch: (uri, options = {}) =>
        //   fetch(uri, { ...options, headers: sign(options.headers) }),
      },
    },
    {
      resolve: `gatsby-plugin-tawk.to`,
      options: {
        tawkId: "59a630da7ab2de3aea9d73d6",
        // get this from the tawk script widget
      },
    },
    {
      resolve: `gatsby-plugin-tawk`,
      options: {
        tawkId: "59a630da7ab2de3aea9d73d6",
        // get this from the tawk script widget
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-purgecss`,
  ],
}