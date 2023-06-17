const { Router } = require("express");
const userRoutes = require("./userRoutes/userRoutes");
const passwordRoutes = require("./recoveryPasswordRoutes/passwordRoutes.js");

const router = Router();

//router.use("/user", userRoutes);
router.use("/recovery", passwordRoutes)

module.exports = router;
