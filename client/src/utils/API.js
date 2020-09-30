import axios from "axios";

export default {
    getTrails: function(lat, lon) {
        return axios.get("/api/getTrails", {
            params: {
                lat: lat,
                lon: lon
            }
        });
    },
    getTrailsById: function(id1) {
        return axios.get("/api/getTrailsById", {
            params: {
                id1: id1
            }
        });
    },
    getWeather: function(lat, lon) {
        return axios.get("/api/getWeather", {
            params: {
                lat: lat,
                lon: lon
            }
        });
    }
}