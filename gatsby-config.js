module.exports = {
  siteMetadata: {
    title: "Dickey's Grille",
	siteUrl: "https://nifty-borg-f86583.netlify.app"
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "gR79XR2sare5Gr_-OPehnwmFzi-OHwSM_sDPrkIHGA8",
        spaceId: "c89v3ldpp2uf",
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
