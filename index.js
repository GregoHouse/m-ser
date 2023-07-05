// const server = require("./src/app.js");
// const { conn } = require("./src/db.js");
require("dotenv").config();
const { conn } = require("./src/db.js");
const { PORT } = process.env;
const server = require("./src/app.js");
const { createRolUser } = require("./src/utils/defaultValuesDB/");

conn
  .sync({ force: true })
  .then(() => {
    createRolUser();
    server.listen(PORT, () => {
      console.log(`server listening at ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
