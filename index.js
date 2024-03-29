const { conn, conectarDB } = require("./src/db.js");
const server = require("./src/app.js");
const { createRolUser } = require("./src/utils/defaultValuesDB");
const generateUsers = require("./src/utils/generate_data_script.js");

conectarDB().then(() => {
  conn
    .sync({ force: true })
    .then(() => {
      createRolUser();
      generateUsers();
      server.listen(server.get("port"), () => {
        console.log(`http://localhost:${server.get("port")}`);
        console.log(`server listening at ${server.get("port")}`);
      });
    })
    .catch((error) => console.log(error));
});
