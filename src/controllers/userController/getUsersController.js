const {User} = require("../../db");

const getUsersController = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

module.exports = getUsersController;
