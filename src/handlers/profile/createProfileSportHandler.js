const {
  createProfileSportControllers,
} = require("../../controllers/profileUser");

module.exports = async (req, res) => {
  try {
    const result = await createProfileSportControllers(req);
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};
