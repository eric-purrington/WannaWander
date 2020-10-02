require("dotenv").config();
const router = require("express").Router();
const axios = require("axios");
const BASEURL = "https://www.hikingproject.com/data/";
const APIKEY = process.env.HIKING_API;

router.get("/getTrails", (req, res) => {
    axios.get(BASEURL + "get-trails?lat=" + req.query.lat + "&lon=" + req.query.lon + "&maxDistance=" + req.query.maxDistance + "&minStars=" + req.query.minStars + "&minLength=" + req.query.minLength + "&maxResults=" + req.query.maxResults + "&key=" + APIKEY)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});

router.get("/getTrailsById", (req, res) => {
    axios.get(BASEURL + "get-trails-by-id?ids=" + req.query.id1 + "&key=" + APIKEY)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});

module.exports = router;