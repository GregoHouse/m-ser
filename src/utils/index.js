module.exports = {
  catchedAsync: require("./catchedAsync.js"),
  sendMessage: require("./nodemailer/nodemailer.js"),
  createToken: require("./auth/createJWT.js"),
};
