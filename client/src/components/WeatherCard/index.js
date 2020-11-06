import React from "react";
import moment from 'moment';
import "./style.css";

function WeatherCard(props) {
    console.log(props.daysWeather)
    const currentDay = moment().add(props.day, "days").format("l");
    const iconSource = "http://openweathermap.org/img/w/" + props.daysWeather.weather[0].icon + ".png";

    const sunriseDate = new Date(props.daysWeather.sunrise);
    const sunriseHours = sunriseDate.getHours();
    const sunriseMin = "0" + sunriseDate.getMinutes();
    const sunriseSec = "0" + sunriseDate.getSeconds();
    const sunriseTime = sunriseHours + ":" + sunriseMin.substr(-2) + ":" + sunriseSec.substr(-2);

    const sunsetDate = new Date(props.daysWeather.sunset);
    const sunsetHours = sunsetDate.getHours();
    const sunsetMin = "0" + sunsetDate.getMinutes();
    const sunsetSec = "0" + sunsetDate.getSeconds();
    const sunsetTime = sunsetHours + ":" + sunsetMin.substr(-2) + ":" + sunsetSec.substr(-2);

    // if (props.day === 0) {
    //     const currentDay = moment().format("l");
    // } else {
    //     const currentDay = moment().add(props.day, "days").format("l");
    // }

    return (
        <div className="weatherCard uk-card uk-card-default uk-card-hover uk-card-body">
            <h4 class="uk-card-title">{currentDay}</h4>
            <img src={iconSource} alt="weather icon" />
            <p>High: {props.daysWeather.temp.max}</p>
            <p>Low: {props.daysWeather.temp.min}</p>
            <p>chance of participtioan</p>
            <p>Sunrise: {sunriseTime}</p>
            <p>Sunset: {sunsetTime}</p>
        </div>
    )
}

export default WeatherCard;