const passport = require("passport");
const { Router } = require("express");
const {
  userHandler,
  getUserByIdHandler,
} = require("../../handlers/userHandler.js");
const { createUserHandler } = require("../../handlers/createUserHandler");
const { updateUserHandler } = require("../../handlers/updateUserHandler");
const { callback } = require("../../handlers/oauth0Handler.js");
const { createUserValidation } = require("../../utils/middlware");
const loginUserHandler = require("../../handlers/loginUserHandler.js");
const forgotPasswordHandler = require("../../handlers/forgotPasswordHandler.js");
const resetPasswordHandler = require("../../handlers/resetPasswordHandler.js");

const userRoutes = Router();

userRoutes.post("/", createUserValidation, createUserHandler);
userRoutes.get("/", userHandler);
userRoutes.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);
userRoutes.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  callback
);
userRoutes.put("/update/:id_user", updateUserHandler);
userRoutes.post("/login", loginUserHandler);
userRoutes.get("/forgotPassword", forgotPasswordHandler);
userRoutes.get("/resetPassword", resetPasswordHandler);
userRoutes.get("/:id", getUserByIdHandler);
userRoutes.put("/update/:id_user", updateUserHandler);

module.exports = userRoutes;
