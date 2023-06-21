const { Router } = require("express");
const { createUserController } = require("../../controllers/userController");

const userRoutes = Router();

userRoutes.post("/", createUserController);

module.exports = userRoutes;
