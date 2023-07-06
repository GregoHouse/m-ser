const { Router } = require("express");
const getSportsHandler = require("../../handlers/sports/getSportsHandler");
const postSportHandler = require("../../handlers/sports/postSportHandler");

const userRoutes = Router();

userRoutes.get("/", getSportsHandler);
userRoutes.post("/", postSportHandler);

module.exports = userRoutes;
