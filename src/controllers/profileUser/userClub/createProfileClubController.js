const { User, Rol_user, Club } = require("../../../db.js");
const ClientError = require("../../../utils/errors");

module.exports = async (req) => {
  let { id_user, name, showers, grills, parking, security } = req.body;

  const userClub = await User.findOne({
    where: { id_user, available: true },
    include: { model: Rol_user },
  });

  if (userClub && userClub.Rol_user["name"] === "club") {
    const validateClub = await Club.findOne({
      where: {
        name,
        id_user,
      },
    });

    if (validateClub) {
      throw new ClientError("Club already exist");
    } else {
      const profileClub = await Club.create({
        name,
        showers,
        grills,
        parking,
        security,
        id_user,
      });

      return profileClub;
    }
  } else {
    throw new ClientError(
      "The user was not found or the user is not a club role",
      404
    );
  }
};
