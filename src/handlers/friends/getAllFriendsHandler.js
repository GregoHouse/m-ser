const { getAllFriendsController } = require("../../controllers/friends");

module.exports = async (req, res) => {
  try {
    const friends = await getAllFriendsController();
    res.status(200).json(friends);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};
