const { User, Location, Rol_user } = require("../../../db");
const ClientError = require("../../../utils/errors");
const { createToken } = require("../../../utils");

module.exports = async (req) => {
  let { rol } = req.body;

  const rolLower = rol.toLowerCase();

  if (rolLower !== "admin") {
    throw new ClientError("invalid role", 401);
  } else {
    let { firstname, lastname, email, password, location } = req.body;

    //? se busca el mail en la base de datos
    const searchEmail = await User.findOne({
      where: { email: email },
    });

    //? si existe el correo devuelve el error
    if (searchEmail) {
      throw new ClientError("The mail is already in use", 401);
    }

    let newUserAdmin = {
      firstname,
      lastname,
      email,
      password,
    };

    const validateLocation = await Location.findOne({
      where: location,
    });

    const adminUser = await User.create(newUserAdmin);

    if (adminUser) {
      if (validateLocation) {
        await validateLocation.addUser(adminUser);
      } else {
        const adminLocation = await Location.create(location);
        await adminLocation.addUser(adminUser);
      }

      const rolUser = await Rol_user.findOne({
        where: { name: rolLower },
      });

      await rolUser.addUser(adminUser);

      return {
        id_user: adminUser.id_user,
        email: adminUser.email,
        token: createToken(adminUser.id_user),
        id_rol: rolUser.id_rol,
      };
    } else {
      throw new ClientError("Error creating user");
    }
  }
};
