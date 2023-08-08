const { Friend } = require("../../db");

module.exports = async () => {
  const allFriends = await Friend.findAll();

  return allFriends;
};
