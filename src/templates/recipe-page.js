import React from "react"
import Default from "../layouts/default.js"
import { Link } from "gatsby"
import SEO from "../components/seo.js"

export default function RecipePage({ pageContext }) {

    const { recipe } = pageContext;

    return (
        <Default>
            <SEO title={recipe.name} description={`Come try our ${recipe.name} at Dickey's Grille!`}></SEO>

            <div className="row">
                <div className="col-sm-6">
                    <h1>{recipe.name}</h1>
                    <p>
                    <Link to="/">Return to Home</Link>
                    </p>
                    <p>{recipe.description.description}</p>
                </div>
                <div className="col-sm-6">
                    <img src={recipe.image.file.url} />
                </div>
            </div>

        </Default>
    )
}