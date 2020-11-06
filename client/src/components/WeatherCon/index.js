import React from "react";
import "./style.css";

function WeatherCon(props) {
    return (
        <div className="uk-container-expand uk-text-center weatherCon">
            <h2>When will the adventure begin?</h2>
            <div className="uk-grid uk-grid-large uk-child-width-1-5" uk-grid="true">
                {props.children}
            </div>
        </div>
    )
}

export default WeatherCon;