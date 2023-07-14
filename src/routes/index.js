const { Router } = require("express");
const userRoutes = require("./userRoutes/userRoutes.js");
const sportRoutes = require("./sports/sportsRoutes.js");
const courtsRoutes = require("./courts/courtsRoutes.js");

const router = Router();

router.use("/users", userRoutes);
router.use("/sports", sportRoutes);
router.use("/courts", courtsRoutes);

module.exports = router;
