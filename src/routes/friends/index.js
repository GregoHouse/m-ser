const { Router } = require("express");
const {
  getAllFriendsHandler,
  addFriendHandler,
} = require("../../handlers/friends/index.js");

const friendsRoutes = Router();

friendsRoutes.get("/", getAllFriendsHandler);
friendsRoutes.post("/", addFriendHandler);

module.exports = friendsRoutes;
