const { Rol_user, Sport } = require("../../db.js");

module.exports = async () => {
  const roles = await Rol_user.findAll();
  const sports = await Sport.findAll();

  if (roles.length === 0) {
    await Rol_user.bulkCreate([
      { name: "admin" },
      { name: "brand" },
      { name: "club" },
      { name: "sport" },
    ]);
  }

  if (sports.length === 0) {
    await Sport.bulkCreate([{ name: "Padel" }, { name: "Golf" }]);
  }
  return;
};
