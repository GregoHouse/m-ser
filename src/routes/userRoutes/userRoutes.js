const { Router } = require("express");
const { createUser } = require("../../controllers/userController");

const userRoutes = Router();

userRoutes.post("/", createUser);

module.exports = userRoutes;
