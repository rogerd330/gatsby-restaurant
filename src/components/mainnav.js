import { Link } from "gatsby"
import React from "react"

export default function MainNav() {
    return (
        <ul className="main-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="/">Checkout</a></li>
            <li><a href="/">Specials</a></li>
        </ul>
    )
}