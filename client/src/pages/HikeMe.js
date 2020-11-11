import React, { useEffect, useState } from "react";
import ChosenHikeCon from "../components/ChosenHikeCon";
import WeatherCon from "../components/WeatherCon";
import WeatherCard from "../components/WeatherCard";
import MapCon from "../components/MapCon";
import API from "../utils/API";

function HikeMe(props) {
    const {name, bigimg, rating, summary, length, gain, distance, location, ratingRating, longitude, latitude} = props.location.hikeProps;
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        API.getWeather(latitude, longitude).then(res => {
            setWeather(res.data.daily)
        });
    }, []);

    return (
        <div className="uk-container-expand">
            <ChosenHikeCon info={props.location.hikeProps}/>

            <WeatherCon>
                {weather.map(day => 
                    <WeatherCard key={day.dt} id={day.dt} day={weather.indexOf(day)} daysWeather={day} />
                )}
            </WeatherCon>

            <MapCon name={name} longitude={longitude} latitude={latitude}/>
        </div>
    )
}

export default HikeMe;