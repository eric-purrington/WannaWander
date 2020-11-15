import React, { useEffect, useState } from "react";
import ChosenHikeCon from "../components/ChosenHikeCon";
import HomageCard from "../components/HomageCard";
import WeatherCon from "../components/WeatherCon";
import WeatherCard from "../components/WeatherCard";
import API from "../utils/API";

function HikeMe(props) {
    const {
        // name, bigimg, rating, summary, length, gain, distance, location, ratingRating,
        longitude, latitude} = props.location.hikeProps;
    const [weather, setWeather] = useState([]);
    const [indigenousData, setIndigenousData] = useState([]);

    useEffect(() => {
        API.getWeather(latitude, longitude).then(res => {
            setWeather(res.data.daily)
        });
        fetch("https://native-land.ca/api/index.php?maps=territories&position=" + latitude + "," + longitude)
            .then(response => response.json())
            .then(data => setIndigenousData(data))
    }, []);

    return (
        <div className="uk-container-expand">
            <ChosenHikeCon info={props.location.hikeProps}>
                {indigenousData.map(territory =>
                    <HomageCard key={territory.properties.Name} info={territory.properties} />
                )}
            </ChosenHikeCon>

            <WeatherCon>
                {weather.map(day => 
                    <WeatherCard key={day.dt} day={weather.indexOf(day)} daysWeather={day} />
                )}
            </WeatherCon>
        </div>
    )
}

export default HikeMe;