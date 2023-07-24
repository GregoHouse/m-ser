const { catchedAsync } = require("../");

module.exports = {
  createSports: catchedAsync(require("./sports.js")),
};
