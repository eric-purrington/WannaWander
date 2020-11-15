require("dotenv").config();
const router = require("express").Router();
const axios = require("axios");
const BASEURL = "https://api.openweathermap.org/data/2.5/";
const APIKEY = process.env.WEATHER_API;

router.get("/getWeather", (req, res) => {
    axios.get(BASEURL + "onecall?lat=" + req.query.lat + "&lon=" + req.query.lon + "&exclude=current,minutely,hourly" + "&units=imperial" + "&appid=" + APIKEY)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});

router.get("/getCoords",  (req, res) => {
    axios.get(BASEURL + "weather?zip=" + req.query.zipcode + "&appid=" + APIKEY)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});

module.exports = router;