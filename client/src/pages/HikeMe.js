import React, { useState, useEffect } from "react";
import FindHikeCon from "../components/FindHikeCon";
import SearchBar from "../components/SearchBar";
import HikeCard from "../components/HikeCard";
import API from "../utils/API";
import Distance from "../utils/Distance";

function HikeMe(props) {
    // const clickedHikeId = window.location.href.split("/hikeme/")[1];
    const {name, img, rating, summary, length, gain, longitude, latitude, location} = props.location.hikeProps;

    useEffect(() => {
        // callAPI();
        console.log(props.location.hikeProps);
        console.log(name);
    }, []);

    // function callAPI() {
    //   API.getTrailsById(clickedHikeId).then(res => {
    //     setClickedHikesInfo(res.data.trails[0]);
    //   });
    // }

    // function findWeather() {
        //   for (var i = 0; i < results.length; i++) {
        //     let weather = {"weather": API.getWeather(results[i].latitude, results[i].longitude)};
        //     results[i].push(weather);
        //   }
        // }
    return (
        <div className="uk-container-expand">
            
        </div>
    )
}

export default HikeMe;