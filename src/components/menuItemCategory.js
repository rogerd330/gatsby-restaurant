import React from "react"
import MenuItemPreview from "../components/menuItemPreview.js"

export default function MenuItemCategory(props) {
    return (
        <>
        <h3>{props.category}</h3>
        {props.data.filter((node => node.category.name === props.category)).map(recipe => (
            <MenuItemPreview recipe={recipe}></MenuItemPreview>
        ))}
        </>
    )
}