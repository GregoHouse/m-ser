import { getUsersController } from "../controllers/userController/getUsersController";

const getUserHandler = async () => {
  try {
    const allUsers = await getUsersController();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = {
  getUserHandler,
};
