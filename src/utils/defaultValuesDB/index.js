const { catchedAsync } = require("../");

module.exports = {
  createRolUser: catchedAsync(require("./rol_user.js")),
};
