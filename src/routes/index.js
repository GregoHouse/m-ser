const { Router } = require("express");
const userRoutes = require("./user/userRoutes.js");
const sportRoutes = require("./sports/sportsRoutes.js");
const courtsRoutes = require("./courts/courtsRoutes.js");
const profileRoutes = require("./profiles");
const friendsRoutes = require("./friends");
const router = Router();

router.use("/users", userRoutes);
router.use("/sports", sportRoutes);
router.use("/courts", courtsRoutes);
router.use("/profile", profileRoutes);
router.use("/friends", friendsRoutes);
module.exports = router;
