import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <nav className="uk-navbar-container uk-navbar uk-margin" uk-navbar="true">
                <div className="uk-navbar-right">
        
                    <ul className="uk-navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <a href="#">My Account</a>
                            <div className="uk-navbar-dropdown">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                    <li><Link to="/signup">Signup</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/logout">Logout</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
        
                </div>
            </nav>
        </div>
    )
};

export default Navbar;