require("dotenv").config();

module.exports = {
  OAUTH0_CLIENT_ID: process.env.OAUTH0_CLIENT_ID,
  OAUTH0_CLIENT_SECRET: process.env.OAUTH0_CLIENT_SECRET,
  PORT: process.env.PORT,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  CLOUD_NAME: process.env.CLOUD_NAME,
  API_KEY: process.env.API_KEY,
  API_SECRET: process.env.API_KEY,
  EMAIL_OWN: process.env.EMAIL_OWN,
  EMAIL_OWN_PASS: process.env.EMAIL_OWN_PASS,
};
