//Imports
import React from "react";

//Imports -Style
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="outer-nav-wrap">
            <div className="inner-nav-wrap">
                <nav className="nav-bar">
                    <ul className="list-wrap">
                        <li className="nav-items"><a className="anchors">EAT</a></li>
                        <li className="nav-items"><a className="anchors">DRINK</a></li>
                        <li className="nav-items"><a className="anchors">VISIT</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar