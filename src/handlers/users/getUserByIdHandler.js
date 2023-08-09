const { getUserByIdControllers } = require("../../controllers/user");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const userByid = await getUserByIdControllers(id);

    res.status(200).json({ error: false, data: userByid });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
