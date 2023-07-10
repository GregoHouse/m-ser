const { Sport } = require("../../db.js");

const postSportController = async (name) => {
  if (!name) {
    throw new Error("Please complete the required information.");
  }

  const newSport = await Sport.create({ name });

  return newSport;
};

module.exports = postSportController;
