const {
  getUsersController,
  getUserByIdController,
} = require("../controllers/userController/getUsersController.js");
const { catchedAsync } = require("../utils");

const userHandler = async (req, res) => {
  try {
    const allUsers = await getUsersController();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const getUserByIdHandler = async (req, res) => {
  try {
    const { id } = req.query;

    const userByid = await getUserByIdController(id);

    res.status(200).json(userByid);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  userHandler: catchedAsync(userHandler),
  getUserByIdHandler,
};
