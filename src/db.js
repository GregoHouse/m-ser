require("dotenv").config();
const { Sequelize } = require("sequelize");
const modelUser = require("./models/user.js")
const modelRecoveryCode = require("./models/recoveryCode.js")

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

modelUser(sequelize);
modelRecoveryCode(sequelize);

const { User } = sequelize.models;

module.exports = {
  sequelize,
  ...sequelize.models,
  conn: sequelize,
};
