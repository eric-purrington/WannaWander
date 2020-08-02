const router = require("express").Router();
const hikingRoutes = require("./hiking");

// User routes
router.use("/", hikingRoutes);

module.exports = router;