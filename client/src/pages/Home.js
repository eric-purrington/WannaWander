import React, { useState, useEffect } from "react";
import FindHikeCon from "../components/FindHikeCon";
import SearchBar from "../components/SearchBar";
import HikeCard from "../components/HikeCard";
import API from "../utils/API";
import Distance from "../utils/Distance";

function Home() {
    const [results, setResults] = useState([]);
    const [queryParams, setQueryParams] = useState({
        usersLat: 0,
        usersLon: 0,
        maxDistance: 30,
        minStars: 0,
        minLength: 0,
        maxResults: 10
    });
    const [sortBy, setSortBy] = useState("");
    const [approxDistance, setApproxDistance] = useState("");
    const [lengthValue, setLengthValue] = useState({min: 0, max: 10});
    const [gainValue, setGainValue] = useState({min: 0, max: 3000});
    const [distanceValue, setDistanceValue] = useState({min: 0, max: 50});

    useEffect(() => {
        if(queryParams.usersLat === 0) {
          getLocation();
        } else {
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
        console.log(event.target)
        setQueryParams({...queryParams,
            maxDistance: event.target.distance.value,
            minStars: event.target.ratingMin.value,
            minLength: event.target.length.value,
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
      // API.getTrails(queryParams).then(res => {
      //   setResults(res.data.trails);
      // });
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
                <HikeCard />
                {/* {results.map(hike => 
                    <HikeCard 
                        key={hike.id}
                        name={hike.name}
                        img={hike.imgMedium}
                        rating={hike.stars}
                        summary={hike.summary}
                        length={hike.length}
                        gain={hike.high - hike.low}
                    />
                )} */}
            </FindHikeCon>
        </div>
    )
}

export default Home;