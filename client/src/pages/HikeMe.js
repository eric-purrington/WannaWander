import React, { useState, useEffect } from "react";
import FindHikeCon from "../components/FindHikeCon";
import SearchBar from "../components/SearchBar";
import HikeCard from "../components/HikeCard";
import API from "../utils/API";
import Distance from "../utils/Distance";

function HikeMe() {
    const clickedHikeId = window.location.href.split("/hikeme/")[1];
    const [clickedHikesInfo, setClickedHikesInfo] = useState({});

    useEffect(() => {
        callAPI();
    }, []);

    function callAPI() {
      API.getTrailsById(clickedHikeId).then(res => {
        setClickedHikesInfo(res.data.trails[0]);
      });
    }
    return (
        <div className="uk-container-expand">

        </div>
    )
}

export default HikeMe;