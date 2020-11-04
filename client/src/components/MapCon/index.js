import React from "react";
import "./style.css";

function MapCon(props) {
    const gMapsURL = "https://www.google.com/maps/dir/?api=1&destination=" + props.name + "travelmode=driving";

    return (
        <div className="uk-container-expand">
            <a href={gMapsURL} className="directionsLink" target="blank">Get Directions</a>
        </div>
    )
}

export default MapCon;