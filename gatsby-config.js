module.exports = {
  siteMetadata: {
    title: "Open GraphQL Ukraine",
    description:
      "Перша безкоштовна GraphQL API платформа для українців. Будуй будь-які додатки для українців швидко – з даними, відкритими для тебе.",
    siteUrl: "https://open-graphql-ua.org",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sass",
    "gatsby-transformer-json",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/content`,
        name: "content",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
        name: "data",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-EWX0TS9CZ0",
        // Puts tracking script in the head instead of the body
        head: true,
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Playfair+Display:400,700"],
        display: "swap",
      },
    },
  ],
};
