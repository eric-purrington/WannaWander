import React, { useState, useEffect } from "react";
import FindHikeCon from "../components/FindHikeCon";
import SearchBar from "../components/SearchBar";
import HikeCard from "../components/HikeCard";
import API from "../utils/API";

function Home() {
    const [results, setResults] = useState([]);
    const [queryParams, setQueryParams] = useState({
        usersLat: 0,
        usersLon: 0,
        maxDistance: 30,
        minStars: 0,
        minLength: 0,
        sort: "quality",
        maxResults: 10
    });

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
        setQueryParams({...queryParams,
            maxDistance: 30,
            minStars: 0,
            minLength: 0,
            sort: "quality",
            maxResults: 10
        })
    }

    function callAPI() {
      console.log(queryParams)
      API.getTrails(queryParams).then(res => {
        setResults(res.data.trails);
        console.log(res)
      });
    }

    return (
        <div className="uk-container-expand">
            <FindHikeCon>
                <SearchBar onSearch={onSearch} />
                {/* {results.trails.map(hike =>  */}
                    <HikeCard 
                        // id={hike.id}
                        // name={hike.name}
                        // img={hike.imgMedium}
                        // rating={hike.stars}
                        // difficulty={hike.difficulty}
                        // summary={hike.summary}
                        // length={hike.length}
                        // gain={hike.high - hike.low}
                    />
                {/* )} */}
            </FindHikeCon>
        </div>
    )
}

export default Home;