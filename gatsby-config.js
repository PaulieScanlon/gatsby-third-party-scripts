require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'Gatsby thrid-party scripts'
  },
  plugins: ['gatsby-plugin-gatsby-cloud']
};
