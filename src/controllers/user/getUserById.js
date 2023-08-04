const { User, Location, Rol_user } = require("../../db");
const ClientError = require("../../utils/errors");

module.exports = async (id_user) => {
  const userByid = await User.findOne({
    where: { id_user },
    include: [{ model: Location }, { model: Rol_user }],
    attributes: { exclude: ["password", "updatedAt"] },
  });

  if (userByid) {
    return userByid;
  } else {
    throw new ClientError("No user was found with the entered id", 401);
  }
};
