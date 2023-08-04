const { User, Rol_user } = require("../../db.js");
const { createToken } = require("../../utils");
const ClientError = require("../../utils/errors");

module.exports = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  const validatePassword = user ? await user.validatePassword(password) : null;

  if (user && validatePassword) {
    const id = user.id_user;
    const id_rol = user.id_rol;
    const rol = await Rol_user.findByPk(id_rol);

    let response = {
      id,
      email: user.email,
      name: `${user.firstname} ${user.lastname}`,
      token: createToken(id),
      rol: rol.name,
    };

    return response;
  } else {
    throw new ClientError("the email or password are not correct", 401);
  }
};
