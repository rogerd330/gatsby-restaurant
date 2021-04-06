import React from "react"
import Default from "../layouts/default.js"
import SEO from "../components/seo.js"

export default function About() {
    return (
        <Default>

            <SEO title="About Dickey's Grille"></SEO>

            <div className="row">
                <div className="col-sm-8">
                    <h1>About Us</h1>

                    <p>Welcome to Dickey's Grille! The best demo site around.</p>
                </div>
                <div className="col-sm-4">
                    <img src="https://via.placeholder.com/150"/>
                </div>
            </div>

        </Default>
    )
}