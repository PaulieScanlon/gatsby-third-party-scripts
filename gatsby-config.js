module.exports = {
  siteMetadata: {
    title: 'Gatsby thrid-party scripts'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-76055934-4',
        anonymize: true,
        enableWebVitalsTracking: true
      }
    }
  ]
};
