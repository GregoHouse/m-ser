const jwt = require("jsonwebtoken");
const { OAUTH0_CLIENT_ID } = require("../../config/env.js");

module.exports = (id) => {
  const token = jwt.sign({ id }, OAUTH0_CLIENT_ID, { expiresIn: "24h" });
  return token;
};
