const { catchedAsync } = require("../../utils");

module.exports = {
  loginUserHandler: catchedAsync(require("./loginUserHandler.js")),
  callback: require("./oauth0Handler.js"),
};
