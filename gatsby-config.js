module.exports = {
  siteMetadata: {
    title: `Zylo - Web Development`,
  },
  pathPrefix: `/zylo`,
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: true,
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-plugin-favicon`,
            options: {
              logo: "./src/images/favicons/favicon.svg",
              injectHTML: true,
              icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                twitter: false,
                yandex: false,
                windows: false
              }
            }
          }
        ]
      }
    },
    "gatsby-plugin-offline"
  ],
}
