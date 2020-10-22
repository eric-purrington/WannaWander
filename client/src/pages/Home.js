import React, { useState, useEffect } from "react";
import FindHikeCon from "../components/FindHikeCon";
import SearchBar from "../components/SearchBar";
import HikeCard from "../components/HikeCard";
import API from "../utils/API";
import Distance from "../utils/Distance";

function Home() {
    const [queryParams, setQueryParams] = useState({
        usersLat: 40,
        usersLon: -105,
        maxDistance: 30,
        minStars: 0,
        minLength: 0,
        maxResults: 50
    });
    const [results, setResults] = useState(JSON.parse(localStorage.getItem("persistingResults")) || []);
    const [sortBy, setSortBy] = useState("");
    const [lengthValue, setLengthValue] = useState({min: 0, max: 10});
    const [gainValue, setGainValue] = useState({min: 0, max: 3000});
    const [distanceValue, setDistanceValue] = useState(50);

    useEffect(() => {
        if (queryParams.usersLat === 40) {
          getLocation();
        } else if (results[0] == null) {
          callAPI();
        }
    }, [queryParams.usersLat]);

    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          alert("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
      setQueryParams({...queryParams, 
          usersLat: position.coords.latitude, 
          usersLon: position.coords.longitude
      });
    }

    const onSearch = (event) => {
        event.preventDefault();
        setQueryParams({...queryParams,
            maxDistance: distanceValue,
            minStars: event.target.ratingMin.value,
            minLength: lengthValue.min,
            maxResults: event.target.maxResults.value
        })
        setSortBy(event.target.sortby.value);
        callAPI();
    }

    const onLengthChange = (value) => {
        setLengthValue(value);
    }

    const onGainChange = (value) => {
        setGainValue(value);
    }
    
    const onDistanceChange = (value) => {
        setDistanceValue(value);
    }

    function callAPI() {
      API.getTrails(queryParams).then(res => {
        let filteredRes = res.data.trails.filter(hike => {
          if (hike.length <= lengthValue.max &&
             hike.length >= lengthValue.min && 
             hike.high-hike.low <= gainValue.max && 
             hike.high-hike.low >= gainValue.min) {
            return true
          }
          return false;
        });
        findApproxDistances(filteredRes);
      });
    }

    function findApproxDistances(filteredRes) {
      for (var i = 0; i < filteredRes.length; i++) {
        let distanceBetween = Distance.findDistanceBetween(queryParams.usersLat, queryParams.usersLon, filteredRes[i].latitude, filteredRes[i].longitude);
        filteredRes[i].distance = distanceBetween;
      }
      if (i = filteredRes.length-1) {
        setResults(filteredRes);
        localStorage.setItem("persistingResults", JSON.stringify(filteredRes))
      }
    }

    return (
        <div className="uk-container-expand">
            <FindHikeCon>
                <SearchBar 
                    onSearch={onSearch} 
                    lengthValue={lengthValue} 
                    onLengthChange={onLengthChange} 
                    gainValue={gainValue} 
                    onGainChange={onGainChange} 
                    distanceValue={distanceValue} 
                    onDistanceChange={onDistanceChange} 
                />
                {results.map(hike => 
                    <HikeCard 
                        key={hike.id}
                        id={hike.id}
                        name={hike.name}
                        img={hike.imgMedium}
                        rating={hike.stars}
                        location={hike.location}
                        summary={hike.summary}
                        length={hike.length}
                        gain={hike.high - hike.low}
                        longitude={hike.longitude}
                        latitude={hike.latitude}
                    />
                )}
            </FindHikeCon>
        </div>
    )
}

export default Home;