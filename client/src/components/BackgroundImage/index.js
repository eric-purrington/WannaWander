import React from "react";
import Navbar from "../Navbar";
import mountains from "../../assets/mountains.png";
import "./style.css";

function BackgroundImage() {
    return (
        <div className="hero-image">
            <Navbar />
            {/* <div className="hero-text"> */}

                <div className="uk-container-expand uk-grid-medium uk-grid uk-grid-match uk-child-width-expand@m" uk-grid="true">
                    <div className="uk-first-column">
                        <h1>Wanna</h1>
                    </div>
                    <div className="uk-first-column">
                        <img className="mountains" alt="mountains" src={mountains}/>
                    </div>
                    <div className="uk-first-column">
                        <h1>Wander?</h1>
                    </div>
                </div>

            {/* </div> */}
        </div>
    )
}

export default BackgroundImage;