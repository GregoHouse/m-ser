const { User, Rol_user } = require("../../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { DB_NAME } = require("../../config/env.js");

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  const rol = await Rol_user.findAll();
  const userRol = rol.filter((e) => e.dataValues.id_rol === user.id_rol);

  const validatePassword = await bcrypt.compare(password, user.password);

  if (user && validatePassword) {
    let response = {
      id: user.id_user,
      email: user.email,
      name: `${user.firstname} ${user.lastname}`,
      token: jwt.sign({ email }, DB_NAME, { expiresIn: "24h" }),
      rol: userRol[0].dataValues.name,
    };

    return response;
  }
  return false;
};

module.exports = loginUser;
