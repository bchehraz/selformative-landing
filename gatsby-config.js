module.exports = {
  siteMetadata: {
    title: 'Selformative, Improve Yourself',
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
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
  pathPrefix: `/`, // this is for adding the site to github pages
};
