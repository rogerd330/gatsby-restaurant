require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Dickey's Grille",
    siteUrl: "https://nifty-borg-f86583.netlify.app",
    titleTemplate: "%s - Dickey's Grille",
    description:
      "Looking for a great burger in Rogers, AR? We've got the best!",
    url: "https://nifty-borg-f86583.netlify.app", // No trailing slash allowed!
    image: "/images/cheeseburger.jpeg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@rogerd330",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "213025502",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
