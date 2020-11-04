import React, { useEffect } from "react";
import ChosenHikeCon from "../components/ChosenHikeCon";
import WeatherCon from "../components/WeatherCon";
import MapCon from "../components/MapCon";
import API from "../utils/API";

function HikeMe(props) {
    const {name, bigimg, rating, summary, length, gain, distance, location, ratingRating, longitude, latitude} = props.location.hikeProps;
    let weather = {};

    useEffect(() => {
        // weather = API.getWeather(latitude, longitude);
    }, []);

    return (
        <div className="uk-container-expand">
            <ChosenHikeCon info={props.location.hikeProps}/>
            <WeatherCon />
            <MapCon name={name}/>
        </div>
    )
}

export default HikeMe;