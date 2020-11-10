import React from "react";
import { Link } from "react-router-dom";
import mountains from "../../assets/mountains.png";
import "./style.css";

function Navbar() {
    return (
        <div className="uk-container-expand">
            <div className="topBar uk-container-expand uk-text-center">
                <p>"Let's get out in natch!" - Nadia</p>
            </div>

            <nav className="uk-navbar-container uk-navbar uk-margin bg-custom" uk-navbar="true">

                <div className="uk-navbar-left">
                    <a className="uk-navbar-item uk-logo" href="/"><img className="mountains" alt="mountains" src={mountains}/>&nbsp;Wanna Wander?</a>
                </div>

                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav uk-visible@s">
                        <li><Link to="/">Find a Hike</Link></li>
                        <li>
                            <a href="/">My Account</a>
                            {/* <div className="uk-navbar-dropdown">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                    <li><Link to="/signup">Signup</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/">Logout</Link></li>
                                </ul>
                            </div> */}
                        </li>
                    </ul>
                    <a href="/" className="uk-navbar-toggle uk-hidden@s" uk-toggle="target: #sidenav" id="hamburger"><i className="fas fa-bars fa-lg"></i></a>
                </div>

            </nav>

            <div id="sidenav" uk-offcanvas="flip: true; overlay: true" className="uk-offcanvas">
                <div className="uk-offcanvas-bar">

                    <button className="uk-offcanvas-close" type="button" uk-close="true"></button>

                    <ul className="uk-nav">
                        <li><Link to="/">Find a Hike</Link></li>
                        {/* <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/">Logout</Link></li> */}
                    </ul>
                </div>
            </div>

            <div className="bottomBar uk-container-expand"></div>
        </div>
    )
};

export default Navbar;