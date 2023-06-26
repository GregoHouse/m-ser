const getUsersController = require("../controllers/userController/getUsersController.js");

const userHandler = async (req, res) => {
  try {
    const allUsers = await getUsersController();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = userHandler;
