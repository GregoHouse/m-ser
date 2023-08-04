const { catchedAsync } = require("../../utils");

module.exports = {
  getAllFriendsHandler: catchedAsync(require("./getAllFriendsHandler")),
  addFriendHandler: catchedAsync(require("./addFriendHandler")),
};
