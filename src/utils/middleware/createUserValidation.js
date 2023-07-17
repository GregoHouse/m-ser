const ClientError = require("../errors");
const { verifyEmailPassword } = require("./metodos");

module.exports = (req, res, next) => {
  let { rol } = req.body;
  if (rol) {
    if (rol.toLowerCase() === "sport") {
      let {
        firstname,
        lastname,
        gender,
        day_birth,
        email,
        phone,
        password,
        location,
      } = req.body;
      if (
        firstname &&
        lastname &&
        gender &&
        day_birth &&
        email &&
        phone &&
        password &&
        location
      ) {
        verifyEmailPassword(email, password);
        return next();
      } else {
        throw new ClientError("You must fill in the required fields", 401);
      }
    }

    if (rol.toLowerCase() === "club") {
      let { firstname, lastname, email, location, password, club_name } =
        req.body;
      if ((firstname && lastname && email && location && password, club_name)) {
        verifyEmailPassword(email, password);
        return next();
      } else {
        throw new ClientError("You must fill in the required fields", 401);
      }
    }

    if (rol.toLowerCase() === "brand") {
      let { firstname, lastname, email, location, password, brand_name } =
        req.body;
      if (
        firstname &&
        lastname &&
        email &&
        location &&
        password &&
        brand_name
      ) {
        verifyEmailPassword(email, password);
        return next();
      } else {
        throw new ClientError("You must fill in the required fields", 401);
      }
    }
    if (rol.toLowerCase() === "admin") {
      let { email, password, location } = req.body;
      if (email && password && location) {
        verifyEmailPassword(email, password);
        return next();
      } else {
        throw new ClientError("You must fill in the required fields", 401);
      }
    }
  } else {
    throw new ClientError("User role not entered");
  }
};
