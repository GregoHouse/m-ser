const { Router } = require("express");
// const { createUserController } = require("../../controllers/userController");
const {
  getUsersController,
} = require("../../controllers/userController/getUsersController");

const userRoutes = Router();

// userRoutes.post("/", createUserController);

userRoutes.get("/users", getUsersController);

module.exports = userRoutes;
