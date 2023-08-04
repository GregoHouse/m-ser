const passport = require("passport");
const { Router } = require("express");
const {
  createUserSportHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  updateSportUserHandler,
  createUserAdminHandler,
  createUserBrandHandler,
  createUserClubHandler,
} = require("../../handlers/users");
const { createUserValidation } = require("../../utils/middleware");
const { loginUserHandler, callback } = require("../../handlers/login");
const forgotPasswordHandler = require("../../handlers/recoveryPassword/forgotPasswordHandler");
const resetPasswordHandler = require("../../handlers/recoveryPassword/resetPasswordHandler");

const userRoutes = Router();

userRoutes.post("/sport", createUserValidation, createUserSportHandler);
userRoutes.get("/", getAllUsersHandler);
userRoutes.get("/:id", getUserByIdHandler);
userRoutes.put("/update/sport/:id", updateSportUserHandler);
userRoutes.post("/admin", createUserValidation, createUserAdminHandler);
userRoutes.post("/club", createUserValidation, createUserClubHandler);
userRoutes.post("/brand", createUserValidation, createUserBrandHandler);
userRoutes.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);
userRoutes.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  callback
);
userRoutes.post("/login", loginUserHandler);
userRoutes.get("/forgotPassword", forgotPasswordHandler);
userRoutes.get("/resetPassword", resetPasswordHandler);

module.exports = userRoutes;
