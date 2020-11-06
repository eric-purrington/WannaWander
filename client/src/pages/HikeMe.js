import React, { useEffect, useState } from "react";
import ChosenHikeCon from "../components/ChosenHikeCon";
import WeatherCon from "../components/WeatherCon";
import MapCon from "../components/MapCon";
import API from "../utils/API";

function HikeMe(props) {
    const {name, bigimg, rating, summary, length, gain, distance, location, ratingRating, longitude, latitude} = props.location.hikeProps;
    // const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    // const date = new Date();
    // const today = daysOfTheWeek[date.getDay() - 1];
    const [weather, setWeather] = useState([]);
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        API.getWeather(latitude, longitude).then(res => {
            setAlerts(res.data.alerts);
            setWeather(res.data.daily);
        });
    }, []);

    return (
        <div className="uk-container-expand">
            <ChosenHikeCon info={props.location.hikeProps}/>
            <WeatherCon>
                {weather.map(day => 
                    <WeatherCard key={day.dt} id={day.dt} daysWeather={day} />
                )}
                {alerts !== [] ? <AlertCard key={alerts[0].start} id={alerts[0].start} alerts={alerts[0]} /> : ""}
            </WeatherCon>
            <MapCon name={name}/>
        </div>
    )
}

export default HikeMe;