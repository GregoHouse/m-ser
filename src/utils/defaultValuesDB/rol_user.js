const { Rol_user } = require("../../db.js");

module.exports = async () => {
  const roles = await Rol_user.findAll();

  if (roles.length === 0) {
    await Rol_user.bulkCreate([
      { name: "admin" },
      { name: "brand" },
      { name: "club" },
      { name: "sport" },
    ]);
  } else {
    return;
  }
};
