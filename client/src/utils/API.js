import axios from "axios";

export default {
    getTrails: function(queryParams) {
        return axios.get("/api/getTrails", {
            params: {
                lat: queryParams.usersLat,
                lon: queryParams.usersLon,
                maxDistance: queryParams.maxDistance,
                minStars: queryParams.minStars,
                minLength: queryParams.minLength,
                maxResults: queryParams.maxResults
            }
        }).catch(error => console.log(error));
    },
    // getTrailsById: function(id1) {
    //     return axios.get("/api/getTrailsById", {
    //         params: {
    //             id1: id1
    //         }
    //     }).catch(error => console.log(error));
    // },
    getWeather: function(lat, lon) {
        return axios.get("/api/getWeather", {
            params: {
                lat: lat,
                lon: lon
            }
        }).catch(error => console.log(error));
    }
}