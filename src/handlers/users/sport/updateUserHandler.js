const { updateUserSportControllers } = require("../../../controllers/user");

module.exports = async (req, res) => {
  try {
    const updatedUser = await updateUserSportControllers(req);
    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
};
