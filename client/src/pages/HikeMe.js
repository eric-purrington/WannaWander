import React, { useEffect, useState } from "react";
import ChosenHikeCon from "../components/ChosenHikeCon";
import WeatherCon from "../components/WeatherCon";
import WeatherCard from "../components/WeatherCard";
import AlertCard from "../components/AlertCard";
import MapCon from "../components/MapCon";
import API from "../utils/API";

function HikeMe(props) {
    const {name, bigimg, rating, summary, length, gain, distance, location, ratingRating, longitude, latitude} = props.location.hikeProps;
    const [alerts, setAlerts] = useState([]);
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        API.getWeather(latitude, longitude).then(res => {
            if (res.data.alerts) {
                setAlerts(res.data.alerts)
            }
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
                {alerts !== [] ? "" : <AlertCard key={weather.alerts[0].start} id={weather.alerts[0].start} alerts={weather.alerts[0]} />}
            </WeatherCon>

            <MapCon name={name} longitude={longitude} latitude={latitude}/>
        </div>
    )
}

export default HikeMe;