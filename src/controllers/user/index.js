module.exports = {
  createUserSportControllers: require("./sport/createUserController.js"),
  updateUserSportControllers: require("./sport/updateUserController.js"),
  createUserClubControllers: require("./club/createUserController.js"),
  createUserBrandControllers: require("./brand/createUserController.js"),
  createUserAdminControllers: require("./admin/createUserController.js"),
  getAllUsersControllers: require("./getAllUsers.js"),
  getUserByIdControllers: require("./getUserById.js"),
};
