const { Router } = require("express");
const userRoutes = require("./userRoutes/userRoutes.js");
const sportRoutes = require("./sports/sportsRoutes.js");
const courtsRoutes = require("./courts/courtsRoutes.js");
const profileRoutes = require("./profiles");
const router = Router();

router.use("/users", userRoutes);
router.use("/sports", sportRoutes);
router.use("/courts", courtsRoutes);
router.use("/profile", profileRoutes);
module.exports = router;
