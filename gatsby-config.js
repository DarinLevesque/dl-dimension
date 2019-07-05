module.exports = {
  siteMetadata: {
    title: "Resume for Darin Levesque",
    author: "Darin Levesque",
    description: "A resume website for Darin Levesque"
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
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

    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-plugin-purgecss`
  ]
}
