import React from "react";
import moment from 'moment';
import "./style.css";

function WeatherCard(props) {
    const currentDay = moment().add(props.day, "days").format("l");
    const iconSource = "http://openweathermap.org/img/w/" + props.daysWeather.weather[0].icon + ".png";

    const sunriseDate = new Date(props.daysWeather.sunrise);
    const sunriseHours = sunriseDate.getHours();
    const sunriseMin = "0" + sunriseDate.getMinutes();
    const sunriseTime = sunriseHours + ":" + sunriseMin.substr(-2);

    const sunsetDate = new Date(props.daysWeather.sunset);
    const sunsetHours = sunsetDate.getHours();
    const sunsetMin = "0" + sunsetDate.getMinutes();
    const sunsetTime = sunsetHours + ":" + sunsetMin.substr(-2);

    return (
        <div className="weatherCard uk-card uk-card-default uk-card-hover uk-card-body">
            <h4 className="uk-card-title">{currentDay}</h4>
            <img src={iconSource} alt="weather icon" />
            <p>{Math.round(props.daysWeather.temp.max)}&deg; / {Math.round(props.daysWeather.temp.min)}&deg;</p>
            <p>Sunrise ~ {sunriseTime} am</p>
            <p>Sunset ~ {sunsetTime} pm</p>
        </div>
    )
}

export default WeatherCard;