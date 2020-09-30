import React, { useState, useEffect } from "react";
import FindHikeCon from "../components/FindHikeCon";
import SearchBar from "../components/SearchBar";
import HikeCard from "../components/HikeCard";

function Home() {
    var usersLat;
    var usersLon;
    var hikes = ["this", "that", "another"]

    useEffect(() => {
        getLocation();
    }, []);

    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          alert("Geolocation is not supported by this browser.");
        }
      }

    function showPosition(position) {
        usersLat = position.coords.latitude;
        usersLon = position.coords.longitude;
    }

    return (
        <div className="uk-container-expand">
            <FindHikeCon>
              <SearchBar />
              {hikes.map(hike => 
                <HikeCard />
              )}
            </FindHikeCon>
        </div>
    )
}

export default Home;