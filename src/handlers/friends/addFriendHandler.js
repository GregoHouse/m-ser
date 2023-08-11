const { addFriendController } = require("../../controllers/friends/index.js");

const addFriendHandler = async (req, res) => {
  try {
    const validateAdd = await addFriendController(req.body);
    if (validateAdd) {
      return res.status(200).json({ message: "The friend has been added" });
    }
    res.status(401).json({
      error: "An error has occurred, check the parameters you entered",
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = addFriendHandler;
