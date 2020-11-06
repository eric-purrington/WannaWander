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
    const [weather, setWeather] = useState();
    const [loaded, setLoaded] = useState(false);
    // let weather = []

    useEffect(() => {
        // if (weather == []) {
            // const weatherData = getWeather();
            getWeather()
            console.log(weather, "at line 20")
            // console.log(weatherData)
        // }
        // setWeather(weatherData);
        // const weatherData = await API.getWeather(latitude, longitude).then(res => res.data.daily);
        // console.log(weatherData)
        // setWeather(weatherData);
        // API.getWeather(latitude, longitude).then(res => {
        //     setAlerts(res.data.alerts);
        //     setWeather(res.data.daily);
        //     console.log(res.data.daily)
        // });
    }, []);

    function getWeather() {
        API.getWeather(latitude, longitude).then(res => setWeather(res.data.daily));
        console.log(weather, "at line 36")
        // setWeather(await API.getWeather(latitude, longitude).then(res => res.data.daily));
        // console.log(weather)
        // setWeather(weatherData);
    }

    // function saveWeather(passedWeatherData) {
    //     console.log(passedWeatherData[0].dt)
    //     setWeather(passedWeatherData);
    // }

    return (
        <div className="uk-container-expand">
            <ChosenHikeCon info={props.location.hikeProps}/>

            {weather ? <WeatherCon>
                {weather.map(day => 
                    <WeatherCard key={day.dt} id={day.dt} day={weather.indexOf(day)} daysWeather={day} />
                )}
                {/* {alerts == [] ? "" : <AlertCard key={weather.alerts[0].start} id={weather.alerts[0].start} alerts={weather.alerts[0]} />} */}
            </WeatherCon> : ""}

            <MapCon name={name}/>
        </div>
    )
}

export default HikeMe;