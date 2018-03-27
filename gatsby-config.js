module.exports = {
  siteMetadata: {
    title: 'Selformative, The Blog',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      },
    },
    'gatsby-transformer-remark',
  ],
  pathPrefix: `/`, // this is for adding the site to github pages
};
