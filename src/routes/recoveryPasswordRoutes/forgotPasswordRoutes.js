const { Router } = require("express");
const forgotPasswordHandler = require("../../handlers/recoveryPassword/forgotPasswordHandler.js");

const forgotPasswordRoutes = Router();

forgotPasswordRoutes.post("/", forgotPasswordHandler);

module.exports = forgotPasswordRoutes;
