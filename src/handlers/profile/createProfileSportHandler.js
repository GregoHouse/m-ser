const {
  createProfileSportControllers,
} = require("../../controllers/profileUser");
const { catchedAsync } = require("../../utils");

const createProfileSportHandler = async (req, res) => {
  try {
    const result = await createProfileSportControllers(req);
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createProfileSportHandler: catchedAsync(createProfileSportHandler),
};
