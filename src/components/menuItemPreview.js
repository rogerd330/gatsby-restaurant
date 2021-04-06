import React from "react"
import { Link } from "gatsby"

export default function MenuItemPreview({recipe}) {
    return (
        <>
        <div className="row menu-item-preview">
			<div className="col-sm-4 col-md-6 col-lg-4">
				<img src={recipe.image.file.url} alt={recipe.name} />
			</div>
			<div className="col-sm-8 col-md-6 col-lg-8">
                <h3>{recipe.name}</h3>
                <h4>{recipe.category.name}</h4>
				<p dangerouslySetInnerHTML={{ __html: recipe.description.description }}></p>

                <Link to={"/recipe/" + recipe.id} className="call-to-action">Learn More</Link>
			</div>
		</div>
        </>
    )
}