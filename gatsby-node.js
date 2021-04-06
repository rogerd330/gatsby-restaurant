const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query MyQuery {
        allContentfulRecipes {
            nodes {
                id
                name
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
  `)
  const productTemplate = path.resolve(`src/templates/recipe-page.js`)
  queryResults.data.allContentfulRecipes.nodes.forEach(node => {
    createPage({
      path: `/recipe/${node.id}`,
      component: productTemplate,
      context: {
        // This time the entire product is passed down as context
        recipe: node,
      },
    })
  })
}