const { Router } = require("express");
const getAllFriendsHandler = require("../../handlers/friends");

const friendsRoutes = Router();

friendsRoutes.get("/friends", getAllFriendsHandler);

module.exports = friendsRoutes;
