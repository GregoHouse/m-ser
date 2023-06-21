const { Router } = require("express");
const resetPasswordHandler = require("../../handlers/resetPasswordHandler.js");

const resetPasswordRoutes = Router();

resetPasswordRoutes.post("/", resetPasswordHandler);

module.exports = resetPasswordRoutes;
