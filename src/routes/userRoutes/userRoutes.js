const { Router } = require("express");
const {
  userHandler,
  getUserByIdHandler,
} = require("../../handlers/users/userHandler");
const { createUserHandler } = require("../../handlers/users/createUserHandler");
const { updateUserHandler } = require("../../handlers/users/updateUserHandler");
const { createUserValidation } = require("../../utils/middleware");

const userRoutes = Router();

userRoutes.post("/", createUserValidation, createUserHandler);
userRoutes.get("/", userHandler);
userRoutes.get("/", getUserByIdHandler);
userRoutes.put("/update/:id_user", updateUserHandler);

module.exports = userRoutes;
