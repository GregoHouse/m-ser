const passport = require("passport");
const { Router } = require("express");
const { userHandler, getUserByIdHandler,} = require("../../handlers/users/userHandler");
const { createUserHandler } = require("../../handlers/users/createUserHandler");
const { updateUserHandler } = require("../../handlers/users/updateUserHandler");
const { callback } = require("../../handlers/users/oauth0Handler.js");
const {createUserValidation} = require("../../utils/middleware/createUserValidation");
const loginUserHandler = require("../../handlers/users/loginUserHandler");
const forgotPasswordHandler = require("../../handlers/recoveryPassword/forgotPasswordHandler");
const resetPasswordHandler = require("../../handlers/recoveryPassword/resetPasswordHandler");

const userRoutes = Router();

// userRoutes.post("/", createUserValidation, createUserHandler);
userRoutes.post("/", createUserHandler);
userRoutes.get("/", userHandler);
userRoutes.get("/auth/google", passport.authenticate("google", { scope: ["profile"] }));
userRoutes.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/login" }), callback);
userRoutes.put("/update/:id_user", updateUserHandler);
userRoutes.post("/login", loginUserHandler);
userRoutes.get("/forgotPassword", forgotPasswordHandler);
userRoutes.get("/resetPassword", resetPasswordHandler);
userRoutes.get("/:id", getUserByIdHandler);
//userRoutes.put("/update/:id_user", updateUserHandler);

module.exports = userRoutes;
