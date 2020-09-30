const router = require("express").Router();
const weatherRoutes = require("./weather");

router.use("/", weatherRoutes);

module.exports = router;