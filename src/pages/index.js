import * as React from "react"
import Default from "../layouts/default.js"
import "./index.scss"
import { graphql } from "gatsby"
import MenuItemPreview from "../components/menuItemPreview.js"

// markup
const IndexPage = ({ data }) => {
  return (
    <Default>
      <h2>Welcome to Dickey's Grille</h2>
      <p>Lorem ipsum...</p>

      {data.allContentfulRecipes.nodes.map(recipe => (
        <MenuItemPreview recipe={recipe}></MenuItemPreview>
      ))}

    </Default>
  )
}

export default IndexPage

export const query = graphql`
query MyQuery {
  allContentfulRecipes {
      nodes {
          id
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