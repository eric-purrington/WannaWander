import React, { useEffect } from "react";
import MapCon from "../components/MapCon";
import API from "../utils/API";

function HikeMe(props) {
    const {name, bigimg, rating, summary, length, gain, distance, location} = props.location.hikeProps;
    const gMapsURL = "https://www.google.com/maps/dir/?api=1&destination=" + name;

    useEffect(() => {

    }, []);

    // function findWeather() {
        //   for (var i = 0; i < results.length; i++) {
        //     let weather = {"weather": API.getWeather(results[i].latitude, results[i].longitude)};
        //     results[i].push(weather);
        //   }
        // }
    return (
        <div className="uk-container-expand">
            <h1>{name}</h1>
            <h2>{location}</h2>
            <img src={bigimg} alt={name} />
            <a href={gMapsURL} target="blank">Get Directions</a>





            <MapCon />
        </div>
    )
}

export default HikeMe;