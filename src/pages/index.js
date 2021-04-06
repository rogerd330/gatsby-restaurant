import * as React from "react"
import Default from "../layouts/default.js"
import "./index.scss"
import { graphql } from "gatsby"
import MenuItemCategory from "../components/menuItemCategory.js"
import SEO from "../components/seo.js"

// markup
const IndexPage = ({ data }) => {
  return (
    <Default>

      <SEO title="Best Burgers in Rogers, AR"></SEO>

      <h2>Ordering at Dickey's has never been so easy</h2>
      <h3>Save time and earn points for FREE Barbecue</h3>
      <p>
      We offer you an easy way to order with pickup, curbside and delivery options. Explore our menu and find your local Dickey’s Grille today!
      </p>

      <MenuItemCategory category="Appetizers" data={data.allContentfulRecipes.nodes}></MenuItemCategory>
      <hr/>
      <MenuItemCategory category="Entrees" data={data.allContentfulRecipes.nodes}></MenuItemCategory>
      <hr/>
      <MenuItemCategory category="Desserts" data={data.allContentfulRecipes.nodes}></MenuItemCategory>

    </Default>
  )
}

export default IndexPage

export const query = graphql`
query MyQuery {
  allContentfulRecipes(sort: {fields: position, order: ASC}) {
      nodes {
          slug
          name
          category {
            name
          }
          description {
              description
          }
          image {
              file {
                  url
              }
          }
      }
  }
}
`