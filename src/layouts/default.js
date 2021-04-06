import React from "react"
import MainNav from "../components/mainnav.js"
import 'bootstrap/dist/css/bootstrap.css';

export default function Default({children}) {
    return (
        <>
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h1>Dickey's Grille</h1>
                    </div>
                    <div className="col-sm-6">
                        <MainNav></MainNav>
                    </div>
                </div>
            </div>
            <hr></hr>
        </header>

        <div className="container">
            {children}
        </div>

        <footer>
        <hr></hr>
        <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    <small>&copy; 2021</small>
                </div>
                <div className="col-sm-8">
                    <MainNav></MainNav>
                </div>
                <div className="col-sm-2">
                    [social icons]
                </div>
            </div>
        </div>
        </footer>
        </>
    )
}