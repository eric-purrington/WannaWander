import React, { useState, useEffect } from "react";

function Home() {


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
        var usersLat = position.coords.latitude;
        var usersLon = position.coords.longitude;
    }

    return (
        <div className="uk-container-expand">
            
        </div>
    )
}

export default Home;