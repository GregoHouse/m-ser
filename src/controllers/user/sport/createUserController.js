const { User, Location, Rol_user, Sport } = require("../../../db");
const ClientError = require("../../../utils/errors");
const { createToken, sendMessage } = require("../../../utils");

module.exports = async (req) => {
  let { rol } = req.body;

  let rolLower = rol.toLowerCase();

  if (rolLower !== "sport") {
    throw new ClientError("invalid role", 401);
  } else {
    let {
      firstname,
      lastname,
      email,
      password,
      gender,
      day_birth,
      phone,
      credit_card_warranty,
      avatar_img,
      location,
      sports,
    } = req.body;

    // se busca el mail en la base de datos
    const searchEmail = await User.findOne({
      where: { email: email },
    });

    // si existe el correo devuelve el error
    if (searchEmail) {
      throw new ClientError("The mail is already in use", 401);
    }

    let newUserSport = {
      firstname,
      lastname,
      email,
      password,
      gender,
      day_birth,
      phone,
      credit_card_warranty,
      avatar_img,
    };

    const validateLocation = await Location.findOne({
      where: location,
    });

    const sportUser = await User.create(newUserSport);

    if (sportUser) {
      if (validateLocation) {
        await validateLocation.addUser(sportUser);
      } else {
        const sportLocation = await Location.create(location);
        await sportLocation.addUser(sportUser);
      }

      if (sports && sports.length > 0) {
        for (const sport of sports) {
          const sportRelation = await Sport.findOne({
            where: { name: sport },
          });

          if (sportRelation) {
            await sportRelation.addUser(sportUser);
          }
        }
      }

      const rolUser = await Rol_user.findOne({
        where: { name: rolLower },
      });

      await rolUser.addUser(sportUser);

      await sendMessage(sportUser);
      return {
        id_user: sportUser.id_user,
        email: sportUser.email,
        token: createToken(sportUser.id_user),
        id_rol: rolUser.id_rol,
      };
    } else {
      throw new ClientError("Error creating user");
    }
  }
};
