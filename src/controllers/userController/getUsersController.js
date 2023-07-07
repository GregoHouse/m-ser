const { User, Location } = require("../../db");

const getUsersController = async () => {
  const allUsers = await User.findAll({
    include: {
      model: Location,
    },
  });
  return allUsers;
};

const getUserByIdController = async (id) => {
  const allUsers = await getUsersController();

  const userByid = allUsers.find((user) => user.id == id);

  return userByid;
};

module.exports = { getUsersController, getUserByIdController };
