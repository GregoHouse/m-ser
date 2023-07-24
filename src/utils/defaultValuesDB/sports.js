const { Sport } = require("../../db.js");

module.exports = async () => {
  const sports = await Sport.findAll();

  if (sports.length === 0) {
    await Sport.bulkCreate([{ name: "Padel" }, { name: "Golf" }]);
  }
  return;
};
