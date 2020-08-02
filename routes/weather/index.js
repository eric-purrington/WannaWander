const router = require("express").Router();
const weatherRoutes = require("./weather");

// User routes
router.use("/", weatherRoutes);

module.exports = router;