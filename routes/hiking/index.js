const router = require("express").Router();
const hikingRoutes = require("./hiking");

router.use("/", hikingRoutes);

module.exports = router;