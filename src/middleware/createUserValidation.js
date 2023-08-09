const ClientError = require("../errors");
const { verifyEmailPassword } = require("./metodos");

module.exports = (req, res, next) => {
  let { rol } = req.body;
  if (rol) {
    let { firstname, lastname, email, password, location } = req.body;
    if (firstname && lastname && email && password && location) {
      verifyEmailPassword(email, password);
      return next();
    } else {
      throw new ClientError("You must fill in the required fields", 401);
    }
  } else {
    throw new ClientError("User role not entered");
  }
};
