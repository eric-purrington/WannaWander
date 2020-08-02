require("dotenv").config();
const router = require("express").Router();
const axios = require("axios");
const BASEURL = "https://www.hikingproject.com/data/";
const APIKEY = process.env.HIKING_API;

// Should match /api/getElections
router.get("/getTrails", (req, res) => {
    axios.get(BASEURL + "get-trails?lat=" + req.query.lat + "&lon=" + req.query.lon + "&key=" + APIKEY)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});

// Should match /api/getVoterInfo
router.get("/getTrailsById", (req, res) => {
    axios.get(BASEURL + "get-trails-by-id?ids=" + req.query.id1 + "," + req.query.id2 + "&key=" + APIKEY)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});

// Should match /api/getRepInfo
router.get("/getConditions", (req, res) => {
    axios.get(BASEURL + "get-conditions?ids=" + req.query.id1 + "," + req.query.id2 + "&key=" + APIKEY)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});

module.exports = router;