const { Router } = require("express");
const forgotPasswordHandler = require("../../handlers/forgotPasswordHandler.js");

const forgotPasswordRoutes = Router();

forgotPasswordRoutes.post("/", forgotPasswordHandler);

module.exports = forgotPasswordRoutes;
