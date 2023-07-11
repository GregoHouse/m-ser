const { Router } = require("express");
const userRoutes = require("./userRoutes/userRoutes.js");
const sportRoutes = require("./sports/sportsRoutes.js");

const router = Router();

router.use("/users", userRoutes);
router.use("/sports", sportRoutes);

module.exports = router;
