const ClientError = require("../errors");

module.exports = (req, res, next) => {
  let {
    id_sport,
    id_user,
    laterality,
    court_side,
    match_type,
    day_preference,
    time_preference,
    category_lvl,
  } = req.body;

  if (
    id_sport ||
    id_user ||
    laterality ||
    court_side ||
    match_type ||
    day_preference ||
    time_preference ||
    category_lvl
  ) {
    return next();
  } else {
    throw new ClientError("Missing data to create the profile", 400);
  }
};
