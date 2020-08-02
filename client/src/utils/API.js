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
    getTrailsById: function(id1, id2) {
        return axios.get("/api/getTrailsById", {
            params: {
                id1: id1,
                id2: id2
            }
        });
    },
    getConditions: function(id1, id2) {
        return axios.get("/api/getConditions", {
            params: {
                id1: id1,
                id2: id2
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