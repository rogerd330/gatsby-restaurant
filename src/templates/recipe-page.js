import React from "react"
import Default from "../layouts/default.js"
import { Link } from "gatsby"

export default function RecipePage({ pageContext }) {

    const { recipe } = pageContext;

    return (
        <Default>
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