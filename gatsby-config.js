module.exports = {
  siteMetadata: {
    title: "Dickey's Grille",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "gR79XR2sare5Gr_-OPehnwmFzi-OHwSM_sDPrkIHGA8",
        spaceId: "",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "123456",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
