const { User, Location, Rol_user } = require("../../db");
const bcrypt = require("bcrypt");
const ClientError = require("../../utils/errors");
const serializer = require('../../utils/serializer')
const { cloudiconfig, loadPhoto } = require("../../utils/cloudinary");
//! const getUserinfo = require("./")
const { EMAIL_OWN_PASS, EMAIL_OWN } = process.env;
const nodemailer = require("nodemailer");

const createUserController = async (req) => {
  try {
    let { rol } = req.body;

    rol = rol.toLowerCase();

    if (rol === "admin") {
      let { firstname, lastname, email, password, location } = req.body;

      //? se busca el mail en la base de datos
      const searchEmail = await User.findOne({
        where: { email: email },
      });

      //? si existe el correo devuelve el error
      if (searchEmail) {
        throw new ClientError("The mail is already in use", 401);
      }

      let passwordcrypt = await bcrypt.hash(password, 8);

      let newUserAdmin = {
        firstname,
        lastname,
        email,
        password: passwordcrypt,
      };

      const validateLocation = await Location.findOne({
        where: location,
      });

      let adminUser;

      if (validateLocation) {
        adminUser = await User.create(newUserAdmin);
        await validateLocation.addUser(adminUser);
      } else {
        const adminLocation = await Location.create(location);
        adminUser = await User.create(newUserAdmin);
        await adminLocation.addUser(adminUser);
      }

      const rolLower = rol.toLowerCase();

      const rolUser = await Rol_user.findOne({
        where: { name: rolLower },
      });

      await rolUser.addUser(adminUser);

      const newAdminLocation = await User.findOne({
        where: { email },
        include: {
          model: Location,
        },
        attributes: { exclude: ["password", "updatedAt"] }
      });
   
      if (newAdminLocation) return serializer(newAdminLocation);
      else throw new ClientError("Error creating user");
    }
    if (rol === "brand") {
      let {
        firstname,
        lastname,
        email,
        location,
        phone,
        password,
        brand_name,
      } = req.body;

      //?el name se agrega con mayuscula
      firstname = firstname.toUpperCase();
      lastname = lastname.toUpperCase();

      //? se busca el mail en la base de datos
      const searchEmail = await User.findOne({
        where: { email: email },
      });

      //? si existe el correo devuelve el error
      if (searchEmail) {
        throw new ClientError("The mail is already in use", 401);
      }

      passwordcrypt = await bcrypt.hash(password, 8);

      let newUserBrand = {
        firstname,
        lastname,
        email,
        phone,
        brand_name,
        password: passwordcrypt,
      };

      const validateLocation = await Location.findOne({
        where: location,
      });

      let brandUser;

      if (validateLocation) {
        brandUser = await User.create(newUserBrand);
        await validateLocation.addUser(brandUser);
      } else {
        const brandLocation = await Location.create(location);
        brandUser = await User.create(newUserBrand);
        await brandLocation.addUser(brandUser);
      }

      const rolLower = rol.toLowerCase();

      const rolUser = await Rol_user.findOne({
        where: { name: rolLower },
      });

      await rolUser.addUser(brandUser);

      const newBrandLocation = await User.findOne({
        where: { email },
        include: {
          model: Location,
        },
        attributes: { exclude: ["password", "updatedAt"] }
      });

      if (newBrandLocation) return  serializer(newBrandLocation);
      else throw new ClientError("Error creating user");
    }

    if (rol === "club") {
      let {
        firstname,
        lastname,
        email,
        location,
        password,
        club_name,
        showers,
        grills,
        parking,
        secutiry,
      } = req.body;

      //?el name se agrega con mayuscula
      firstname = firstname.toUpperCase();
      lastname = lastname.toUpperCase();

      //? se busca el mail en la base de datos
      const searchEmail = await User.findOne({
        where: { email: email },
      });

      //? si existe el correo devuelve el error
      if (searchEmail) {
        throw new ClientError("The mail is already in use", 401);
      }

      passwordcrypt = await bcrypt.hash(password, 8);

      let newUserClub = {
        firstname,
        lastname,
        email,
        club_name,
        showers,
        grills,
        parking,
        secutiry,
        password: passwordcrypt,
      };

      const validateLocation = await Location.findOne({
        where: location,
      });

      let clubUser;

      if (validateLocation) {
        clubUser = await User.create(newUserClub);
        await validateLocation.addUser(clubUser);
      } else {
        const clubLocation = await Location.create(location);
        clubUser = await User.create(newUserClub);
        await clubLocation.addUser(clubUser);
      }

      const rolLower = rol.toLowerCase();

      const rolUser = await Rol_user.findOne({
        where: { name: rolLower },
      });

      await rolUser.addUser(clubUser);

      const newClubLocation = await User.findOne({
        where: { email },
        include: {
          model: Location,
        },
        attributes: { exclude: ["password", "updatedAt"] }
      });

      if (newClubLocation) return serializer(newClubLocation);
      else throw new ClientError("Error creating user");
    }

    if (rol === "sport") {
        console.log(req)
      let {
        firstname,
        lastname,
        gender,
        day_birth,
        email,
        location,
        phone,
        credit_card_warranty,
        password,
      } = req.body;

      //?el name se agrega con mayuscula
      firstname = firstname.toUpperCase();
      lastname = lastname.toUpperCase();

      //? se busca el mail en la base de datos
      const searchEmail = await User.findOne({
        where: { email: email },
      });

      //? si existe el correo devuelve el error
      if (searchEmail) {
        throw new ClientError("The mail is already in use", 401);
      }

      let saveProfile = {};
      if (req.files) {
        const { avatar_img } = req.files;
        cloudiconfig();
        if (avatar_img) {
          saveProfile = await loadPhoto(avatar_img.tempFilePath, "User", email);
        }
      }

      passwordcrypt = await bcrypt.hash(password, 8);

      let newUserSport = {
        firstname,
        lastname,
        gender,
        day_birth,
        email,
        phone,
        credit_card_warranty,
        avatar_img: saveProfile.secure_url,
        password: passwordcrypt,
      };

      const validateLocation = await Location.findOne({
        where: location,
      });

      let sportUser;

      if (validateLocation) {
        sportUser = await User.create(newUserSport);
        await validateLocation.addUser(sportUser);
      } else {
        const sportLocation = await Location.create(location);
        sportUser = await User.create(newUserSport);
        await sportLocation.addUser(sportUser);
      }

      const rolLower = rol.toLowerCase();

      const rolUser = await Rol_user.findOne({
        where: { name: rolLower },
      });

      await rolUser.addUser(sportUser);

      const newSportLocation = await User.findOne({
        where: { email },
        include: {
          model: Location,
        },
        attributes: { exclude: ["password", "updatedAt"] }
      });

      if (newSportLocation) return serializer(newSportLocation);
      else throw new ClientError("Error creating user");
    }

    const config = {
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: EMAIL_OWN,
        pass: EMAIL_OWN_PASS,
      },
    };

    const mensaje = {
      from: EMAIL_OWN,
      to: newUser.email,
      subject: "Bienvenido a Matching!",
      html: `
      <div style="background-color: black; padding: 10px 20px; text-align: center;">
          <img src="logo de matching bla bla bla" alt="Matching! Logo" style="max-width: 400px;">
      </div>
      <head>
      <title>Bienvenido a Matching!</title>
  </head>
  <body>
  
      <div style="background-color: #f5f5f5; padding: 20px; font-family: Arial, sans-serif;">
          <div style="background-color: #ffffff; padding: 20px;">
              <h1 style="color: #333333;">¡Bienvenido a Matching!</h1>
              <p>Estimado ${newUser.name},</p>
              <p>¡Bienvenido a Matching!</p>
               <p>Nos complace darte la bienvenida a nuestra plataforma diseñada para bla bla bla</p>
              <p>En Matching  entendemos la importancia de bla bla bla. Nuestra plataforma ofrece una amplia gama de características y herramientas para bla bla bla.</p>
              <p>Aquí hay algunas características destacadas de Matching:</p>
              <ol>
                  <li>Perfil personalizado: Crea un perfil único que bla bla bla</li>
                  <li>Otras caranteristicas bla bla bla</li>
              </ol>
              <p>Estamos emocionados de tenerte a bordo y esperamos verte prosperar en Matching. Si tienes alguna pregunta, no dudes en ponerte en contacto con nuestro equipo de soporte a través de <a href="${EMAIL_OWN}">${EMAIL_OWN}</a>. Estaremos encantados de ayudarte en cualquier momento.</p>
              <p>Una vez más, bienvenido a Matching. Estamos ansiosos de bla bla bla. ¡Juntos, haremos vibrar las canchas!</p>
              <p>Saludos cordiales,</p>
              <p>El equipo de Matching!</p>
          </div>
      </div>
  </body>`,
    };
    const transport = nodemailer.createTransport(config);

    const info = await transport.sendMail(mensaje);
    // return userLocation;
  } catch (error) {
    throw new Error(error);
  }
};


module.exports = { createUserController };
