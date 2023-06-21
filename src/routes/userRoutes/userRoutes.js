const { Router } = require("express");
//const { createUserController } = require("../../controllers/userController");//
const userHandler = require("../../handlers/userHandler.js");
const userRoutes = Router();

// userRoutes.post("/", createUserController);
userRoutes.get("/", userHandler);

module.exports = userRoutes;
