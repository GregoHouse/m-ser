const { catchedAsync } = require("../../utils");

module.exports = {
  createProfileSportHandler: catchedAsync(
    require("./createProfileSportHandler.js")
  ),
  createProfileClubHandler: catchedAsync(
    require("./createProfileClubHandler.js")
  ),
};
