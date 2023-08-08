const { EMAIL_OWN_PASS, EMAIL_OWN } = process.env;
const nodemailer = require("nodemailer");

module.exports = async (user) => {
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
    to: user.email,
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
              <p>Estimado ${user.firstname} ${user.lastname},</p>
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
};
