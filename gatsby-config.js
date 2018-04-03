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
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://selformative.us12.list-manage.com/subscribe/post?u=290fa60d77ff0968747ddf2f3&amp;id=1a233a1eec'
      }
    }
  ],
  pathPrefix: `/`, // this is for adding the site to github pages
};
