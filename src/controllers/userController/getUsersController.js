const {User, Location} = require("../../db");

const getUsersController = async () => {
  const allUsers = await User.findAll({
    include: {
      model: Location
    }});
  return allUsers;
};

module.exports = getUsersController;
