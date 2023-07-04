const { Router } = require("express");
const userRoutes = require("./userRoutes/userRoutes.js");
const loginUserRoutes = require("./userRoutes/loginUserRoutes.js");
const forgotPasswordRoutes = require("./recoveryPasswordRoutes/forgotPasswordRoutes.js");
const resetPasswordRoutes = require("./recoveryPasswordRoutes/resetPasswordRoutes.js");

const router = Router();

router.use("/users", userRoutes);
router.use("/login", loginUserRoutes);
router.use("/forgotPassword", forgotPasswordRoutes);
router.use("/resetPassword", resetPasswordRoutes);
router.use("/reservate", resetPasswordRoutes);

module.exports = router;
