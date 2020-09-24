import React, { useState, useEffect } from "react";

function Home() {
    var usersLat;
    var usersLon;

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
            <h1 className="findAHikeH1">Find a Hike</h1>
        </div>
    )
}

export default Home;