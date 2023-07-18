require("dotenv").config();
const { User, RecoveryCode } = require("../../db.js");
const nodemailer = require("nodemailer");
const randomize = require("randomatic");

const { EMAIL_OWN, EMAIL_OWN_PASS } = process.env;

const forgotPassword = async (email) => {
  let code = randomize("A0", 4);
  await RecoveryCode.create({ code, email });
  const validateUser = await User.findOne({
    where: {
      email,
    },
  });

  if (validateUser) {
    async function main() {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: EMAIL_OWN, // generated ethereal user
          pass: EMAIL_OWN_PASS, // generated ethereal password
        },
      });

      let info = await transporter.sendMail({
        from: '"Matchig Team " <diegoamundaray2017@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Code to  Password for Matching", // Subject line
        text: `Hello, Your code to reset passwore is ${code}`, // plain text body
      });

      console.log("Message sent: %s", info.messageId);
    }

    main().catch(console.error);
    return true;
  }
  return false;
};

module.exports = forgotPassword;
