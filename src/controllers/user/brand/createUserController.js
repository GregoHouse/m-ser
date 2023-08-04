const { User, Location, Rol_user } = require("../../../db");
const ClientError = require("../../../utils/errors");
const { createToken } = require("../../../utils");

module.exports = async (req) => {
  let { rol } = req.body;

  const rolLower = (rol = rol.toLowerCase());

  if (rolLower !== "brand") {
    throw new ClientError("invalid role", 401);
  } else {
    let { firstname, lastname, email, location, phone, password, brand_name } =
      req.body;

    //? se busca el mail en la base de datos
    const searchEmail = await User.findOne({
      where: { email: email },
    });

    //? si existe el correo devuelve el error
    if (searchEmail) {
      throw new ClientError("The mail is already in use", 401);
    }

    let newUserBrand = {
      firstname,
      lastname,
      email,
      phone,
      brand_name,
      password,
    };

    const validateLocation = await Location.findOne({
      where: location,
    });

    let brandUser = await User.create(newUserBrand);

    if (brandUser) {
      if (validateLocation) {
        await validateLocation.addUser(brandUser);
      } else {
        const brandLocation = await Location.create(location);
        await brandLocation.addUser(brandUser);
      }

      const rolUser = await Rol_user.findOne({
        where: { name: rolLower },
      });

      await rolUser.addUser(brandUser);

      return {
        id_user: brandUser.id_user,
        email: brandUser.email,
        token: createToken(brandUser.id_user),
        id_rol: rolUser.id_rol,
      };
    } else {
      throw new ClientError("Error creating user");
    }
  }
};
