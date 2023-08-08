const { User, Location, Rol_user } = require("../../db.js");

module.exports = async () => {
  const allUsers = await User.findAll({
    include: [{ model: Location }, { model: Rol_user }],
    attributes: { exclude: ["password", "updatedAt"] },
  });
  return allUsers;
};
