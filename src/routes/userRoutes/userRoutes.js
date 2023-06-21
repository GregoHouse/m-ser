const { Router } = require("express");
const userHandler = require("../../handlers/userHandler.js");
const { createUserHandler } = require("../../handlers/createUserHandler");
const userRoutes = Router();

userRoutes.post("/", createUserHandler);
userRoutes.get("/", userHandler);


module.exports = userRoutes;
