const postSportController = require("../../controllers/sports/postSportController");

const postSportHandler = async (req, res) => {
  try {
    const { name } = req.body;

    const newSport = await postSportController(name);
    res.status(200).json(newSport);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postSportHandler;
