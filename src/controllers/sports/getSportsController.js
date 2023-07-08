const { Sport } = require("../../db.js");

const getSportsController = async () => {
  const allSports = await Sport.findAll();

  return allSports;
};

module.exports = getSportsController;
