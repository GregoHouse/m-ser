const { Router } = require("express");
const {
  getAllFriendsHandler,
  addFriendHandler,
} = require("../../handlers/friends/index.js");

const friendsRoutes = Router();

friendsRoutes.get("/", getAllFriendsHandler);
friendsRoutes.post("/friends", addFriendHandler);

module.exports = friendsRoutes;
