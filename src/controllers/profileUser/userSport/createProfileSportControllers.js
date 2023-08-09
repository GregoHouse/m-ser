const { Profile, User, Sport, Rol_user } = require("../../../db.js");
const ClientError = require("../../../utils/errors");

module.exports = async (req) => {
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

  const userSport = await User.findOne({
    where: { id_user, available: true },
    include: { model: Rol_user },
  });
  const sport = await Sport.findOne({ where: { id_sport } });

  if (userSport && sport && userSport.Rol_user["name"] === "sport") {
    const validateProfile = await Profile.findOne({
      where: {
        id_sport,
        id_user,
      },
    });

    if (validateProfile) {
      throw new ClientError("Profile already exist");
    } else {
      const profileSport = await Profile.create({
        laterality,
        court_side,
        match_type,
        day_preference,
        time_preference,
        category_lvl,
        id_sport,
        id_user,
      });

      //userSport.addProfile(profileSport);
      //sport.addProfile(profileSport);

      return profileSport;
    }
  } else {
    throw new ClientError(
      "The user or sport was not found to create the profile",
      404
    );
  }
};
