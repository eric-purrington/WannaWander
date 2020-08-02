const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const gapiRoutes = require("./gapi");
const hikingRoutes = require("./hiking");
const weatherRoutes = require("./weather");

// API Routes
router.use("/api", apiRoutes);
router.use("/api", gapiRoutes);
router.use("/api", hikingRoutes);
router.use("/api", weatherRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;