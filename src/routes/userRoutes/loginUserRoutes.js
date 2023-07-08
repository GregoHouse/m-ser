const { Router } = require("express");
const loginUserHandler = require("../../handlers/users/loginUserHandler.js");

const loginUserRoutes = Router();

loginUserRoutes.post("/", loginUserHandler);

module.exports = loginUserRoutes;
