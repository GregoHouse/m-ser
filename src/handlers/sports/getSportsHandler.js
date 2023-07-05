const getSportsController = require("../../controllers/sports/getSportsController");

const getSportsHandler = async (req, res) => {
  try {
    const allSports = await getSportsController();

    res.status(200).json(allSports);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getSportsHandler;
