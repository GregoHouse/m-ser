// const server = require("./src/app.js");
// const { conn } = require("./src/db.js");
require("dotenv").config();
const { conn, conectarDB } = require("./src/db.js");
const { PORT } = process.env;
const server = require("./src/app.js");
const { createRolUser } = require("./src/utils/defaultValuesDB");

conectarDB().then(() => {
  conn
    .sync({ force: true })
    .then(() => {
      createRolUser();
      server.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
        console.log(`Server listening at port ${PORT}`);
      });
    })
    .catch((error) => console.log(error));
});
