import { getUsers } from "../controllers/userController";

const getUserHandler = async () => {
  try {
    const allUsers = await getUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = {
  getUserHandler,
};
