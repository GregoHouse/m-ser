require("./db.js");
require("./controllers/userController/oauth0UserController.js");
const express = require("express");
const routes = require("./routes/index");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const session = require("express-session");
const { OAUTH0_CLIENT_SECRET, PORT } = require("./config/env.js");

const server = express();
server.name = "API";
server.set("port", PORT);

server.use(
  session({
    secret: OAUTH0_CLIENT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

server.use(passport.initialize());
server.use(passport.session());

server.use(morgan("dev"));
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json", "Authorization");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", routes);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;
  console.error(err);
  res.status(status).json({ message });
});

module.exports = server;
