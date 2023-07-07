const { User, Location, Rol_user } = require("../../db");

const getUsersController = async () => {
  const allUsers = await User.findAll({
    include: [{ model: Location }, { model: Rol_user }],
  });
  return allUsers;
};

module.exports = getUsersController;
