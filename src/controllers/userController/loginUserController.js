require("dotenv").config();
const { User } = require("../../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { DB_NAME } = process.env;

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  const validatePassword = await bcrypt.compare(password, user.password);

  if (user && validatePassword) {
    let response = {
      id: user.id_user,
      email: user.email,
      name: `${user.firstname} ${user.lastname}`,
      token: jwt.sign({ email }, DB_NAME, { expiresIn: "24h" }),
    };

    return response;
  }
  return false;
};

module.exports = loginUser;
