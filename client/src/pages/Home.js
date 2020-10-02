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
    const [gain, setGain] = useState("");
    const [approxDistance, setApproxDistance] = useState("");
    const [lengthValue, setLengthValue] = useState("");

    useEffect(() => {
        if(queryParams.usersLat === 0) {
          getLocation();
        } else {
          callAPI();
        }
    }, [queryParams]);

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
        setGain(event.target.gain.value);
    }

    const onLengthChange = (event) => {
      event.preventDefault();
      setLengthValue(event.target.value);
    }

    function callAPI() {
      console.log(queryParams);
      // API.getTrails(queryParams).then(res => {
      //   setResults(res.data.trails);
      // });
    }

    return (
        <div className="uk-container-expand">
            <FindHikeCon>
                <SearchBar onSearch={onSearch} lengthValue={lengthValue} onLengthChange={onLengthChange} />
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