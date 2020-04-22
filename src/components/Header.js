import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../icons/logo.png";

function Header() {
    return(
        <header>
                <div className="container">  
                    <nav>
                        <div className="link-right">
                            <NavLink to="/" ><img alt="logo" src={logo} /></NavLink>
                        </div>
                        <div className="link-left">
                            <NavLink activeStyle={{ color: 'rgba(11, 18, 23, 1.2)' }} to="/nude-kolekce" className="nav-bar-link">NUDE kolekce</NavLink>
                            <NavLink activeStyle={{ color: 'rgba(11, 18, 23, 1.2)' }} to="/woo-limitky" className="nav-bar-link">WOO limitky</NavLink>
                            <NavLink activeStyle={{ color: 'rgba(11, 18, 23, 1.2)' }} to="/kosik" className="nav-bar-link">Košík</NavLink>
                        </div>
                    </nav>
                </div> 
        </header>
    )
}

export default Header;