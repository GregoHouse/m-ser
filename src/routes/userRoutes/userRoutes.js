const { Router } = require("express");
const userHandler = require("../../handlers/userHandler.js");
const { createUserHandler } = require("../../handlers/createUserHandler");
const { updateUserHandler } = require("../../handlers/updateUserHandler")
const { createUserValidation } = require("../../utils/middlware");

const userRoutes = Router();

userRoutes.post("/", createUserValidation, createUserHandler);
userRoutes.get("/", userHandler);
userRoutes.put("/update/:id_user", updateUserHandler);


module.exports = userRoutes;
