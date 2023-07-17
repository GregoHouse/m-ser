// const server = require("./src/app.js");
// const { conn } = require("./src/db.js");
require("dotenv").config();
const { conn, conectarDB } = require("./src/db.js");
const { PORT } = process.env;
const server = require("./src/app.js");
const { createRolUser } = require("./src/utils/defaultValuesDB");
const generateUsers = require("./src/utils/generate_data_script.js");

conectarDB().then(() => {
  conn
    .sync({ force: false })
    .then(() => {
      createRolUser();
      generateUsers();
      server.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
        console.log(`server listening at ${PORT}`);
      });
    })
    .catch((error) => console.log(error));
});
