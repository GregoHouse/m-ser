const {Router} = require("express");
const createCourtHandler = require("../../handlers/court/createCourtHandler.js");
const getCourtsHandler = require("../../handlers/court/getCourtsHandler.js");

const courtsRoutes = Router();

courtsRoutes.post("/", createCourtHandler);
courtsRoutes.get("/", getCourtsHandler);

module.exports = courtsRoutes;

