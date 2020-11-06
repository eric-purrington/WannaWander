import React from "react";
import "./style.css";

function WeatherCard(props) {
    return (
        <div className="weatherCard uk-card uk-card-default uk-card-hover uk-card-body">
            <h4 class="uk-card-title">Date</h4>
            <img></img>
            <p>High: </p>
            <p>Low: </p>
            <p>chance of participtioan</p>
            <p>Sunrise: </p>
            <p>Sunset: </p>
        </div>
    )
}

export default WeatherCard;