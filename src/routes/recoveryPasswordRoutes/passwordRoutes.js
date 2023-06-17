const { Router } = require("express");
const recoveryPasswordHandler = require("../../handlers/recoveryPasswordHandler.js");

const passwordRoutes = Router();

passwordRoutes.post("/", recoveryPasswordHandler);

module.exports = passwordRoutes;
