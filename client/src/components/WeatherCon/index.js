import React from "react";
import "./style.css";

function WeatherCon(props) {

    return (
        <div className="uk-container-expand uk-text-center">
            <h3>When will the adventure begin?</h3>
            <div className="uk-grid uk-child-width-1-4" uk-grid="true">
                {props.children}
            </div>
        </div>
    )
}

export default WeatherCon;