const { catchedAsync } = require("../../utils");

module.exports = {
  createUserSportHandler: catchedAsync(require("./sport/createUserHandler.js")),
  updateSportUserHandler: catchedAsync(require("./sport/updateUserHandler.js")),
  createUserAdminHandler: catchedAsync(require("./admin/createUserHandler.js")),
  createUserBrandHandler: catchedAsync(require("./brand/createUserHandler.js")),
  createUserClubHandler: catchedAsync(require("./club/createUserHandler.js")),
  getAllUsersHandler: catchedAsync(require("./getAllUserHandler.js")),
  getUserByIdHandler: catchedAsync(require("./getUserByIdHandler.js")),
};
