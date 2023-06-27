const { Router } = require("express");
const userHandler = require("../../handlers/userHandler.js");
const { createUserHandler } = require("../../handlers/createUserHandler");
const { updateUserHandler } = require("../../handlers/updateUserHandler")
const userRoutes = Router();

userRoutes.post("/", createUserHandler);
userRoutes.get("/", userHandler);
userRoutes.put("/update/:id_user", updateUserHandler);


module.exports = userRoutes;
