const { getAllUsersControllers } = require("../../controllers/user");

module.exports = async (req, res) => {
  try {
    const allUsers = await getAllUsersControllers();
    res.status(200).json({ error: false, data: allUsers });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};
