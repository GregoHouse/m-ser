const { User, Location, Rol_user } = require("../../../db.js");
const ClientError = require("../../../utils/errors");
const { createToken } = require("../../../utils");

module.exports = async (req) => {
  let { rol } = req.body;

  const rolLower = rol.toLowerCase();

  if (rolLower !== "club") {
    throw new ClientError("invalid role", 401);
  } else {
    let { firstname, lastname, email, phone, location, password } = req.body;

    //? se busca el mail en la base de datos
    const searchEmail = await User.findOne({
      where: { email: email },
    });

    //? si existe el correo devuelve el error
    if (searchEmail) {
      throw new ClientError("The mail is already in use", 401);
    }

    let newUserClub = {
      firstname,
      lastname,
      email,
      password,
      phone,
    };

    const validateLocation = await Location.findOne({
      where: location,
    });

    let clubUser = await User.create(newUserClub);

    if (clubUser) {
      if (validateLocation) {
        await validateLocation.addUser(clubUser);
      } else {
        const clubLocation = await Location.create(location);
        await clubLocation.addUser(clubUser);
      }

      const rolUser = await Rol_user.findOne({
        where: { name: rolLower },
      });

      await rolUser.addUser(clubUser);

      return {
        id_user: clubUser.id_user,
        email: clubUser.email,
        token: createToken(clubUser.id_user),
        id_rol: rolUser.id_rol,
      };
    } else {
      throw new ClientError("Error creating user");
    }
  }
};
