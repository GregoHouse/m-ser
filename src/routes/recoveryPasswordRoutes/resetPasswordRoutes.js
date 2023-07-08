const { Router } = require("express");
const resetPasswordHandler = require("../../handlers/recoveryPassword/resetPasswordHandler.js");

const resetPasswordRoutes = Router();

resetPasswordRoutes.post("/", resetPasswordHandler);

module.exports = resetPasswordRoutes;
