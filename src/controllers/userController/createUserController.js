const { User, Location } = require("../../db");
const bcrypt = require("bcrypt")
const ClientError = require("../../utils/errors");
// const { cloudiconfig, loadPhoto } = require("../../../utils/cloudinary")
//! const getUserinfo = require("./")
// const { PASSWORD_EMAIL,EMAIL_ADDRES} = process.env;//! para cuando se configure el correo
// const nodemailer = require("nodemailer")



const createUserController = async (req) => {

    let {
        name, lastname, gender, day_birth, email, location, phone, credit_card_warranty, password} = req.body;
    
    //?el name se agrega con mayuscula
    name = name.toUpperCase();
    lastname = lastname.toUpperCase();

    //? se busca el mail en la base de datos
    const searchEmail = await User.findOne({
        where: { email: email }
    });

    //? si existe el correo devuelve el error
    if (searchEmail) {
        throw new ClientError("El Correo ya esta en uso", 401);
    }
    // let saveProfile = {},
    //  saveCover = {}
    // if (req.files) {
    //     const { profilePhoto, coverPhoto } = req.files
    //     cloudiconfig()
    //     if (profilePhoto) {

    //         saveProfile = await loadPhoto(profilePhoto.tempFilePath,"Artist",nickName);
    //     }

    //     if (coverPhoto) {
    //         // cloudiconfig()
    //         saveCover = await loadPhoto(coverPhoto.tempFilePath,"Artist",nickName);
    //     }
    // }

    passwordcrypt = await bcrypt.hash(password, 8);
    try {
      name, lastname, gender, day_birth, email, phone, credit_card_warranty, password
        let newUser = {
            name,
            lastname,
            gender,
            day_birth,
            email,
            phone,
            credit_card_warranty,
            // coverPhoto: saveCover.secure_url,
            password:passwordcrypt
        }

        const validateLocation = await Location.findOne({
            where: location
        });

        if(validateLocation){
            const relacionUser = await User.create(newUser);
            await validateLocation.addUser(relacionUser);
        } else {
            const newLocation = await Location.create(location);
            userRelacion = await User.create(newUser);
            await newLocation.addUser(userRelacion);
        }
        
        const userLocation =  await User.findOne({
            where: { email },
            include: {
                model: Location
            }
        })
        return userLocation;

        //! queda un bosquejo del envio de correo automatico con nodemailer (por confirmar)
        // const config = {
        //     host: "smtp.gmail.com",
        //     port: 587,
        //     auth: {
        //         user: EMAIL_ADDRES,
        //         pass: PASSWORD_EMAIL
        //     }
        // }

        // const mensaje = {
        //     from: EMAIL_ADDRES,
        //     to: newUser.email,
        //     subject: "Bienvenido a Matching!",
        //     html: `
        //     <div style="background-color: black; padding: 10px 20px; text-align: center;">
        //         <img src="logo de matching bla bla bla" alt="Matching! Logo" style="max-width: 400px;">
        //     </div>
        //     <head>
        //     <title>Bienvenido a Matching!</title>
        // </head>
        // <body>

        //     <div style="background-color: #f5f5f5; padding: 20px; font-family: Arial, sans-serif;">
        //         <div style="background-color: #ffffff; padding: 20px;">
        //             <h1 style="color: #333333;">¡Bienvenido a Matching!</h1>
        //             <p>Estimado ${newUser.name},</p>
        //             <p>¡Bienvenido a Matching!</p>
        //              <p>Nos complace darte la bienvenida a nuestra plataforma diseñada para bla bla bla</p>
        //             <p>En Matching  entendemos la importancia de bla bla bla. Nuestra plataforma ofrece una amplia gama de características y herramientas para bla bla bla.</p>
        //             <p>Aquí hay algunas características destacadas de Matching:</p>
        //             <ol>
        //                 <li>Perfil personalizado: Crea un perfil único que bla bla bla</li>
        //                 <li>Otras caranteristicas bla bla bla</li>
        //             </ol>
        //             <p>Estamos emocionados de tenerte a bordo y esperamos verte prosperar en Matching. Si tienes alguna pregunta, no dudes en ponerte en contacto con nuestro equipo de soporte a través de <a href="${EMAIL_ADDRES}">${EMAIL_ADDRES}</a>. Estaremos encantados de ayudarte en cualquier momento.</p>
        //             <p>Una vez más, bienvenido a Matching. Estamos ansiosos de bla bla bla. ¡Juntos, haremos vibrar las canchas!</p>
        //             <p>Saludos cordiales,</p>
        //             <p>El equipo de Matching!</p>
        //         </div>
        //     </div>
        // </body>`
        // }
        // const transport = nodemailer.createTransport(config);

        // const info = await transport.sendMail(mensaje);
        // const getall = getArtistInfo(newArtist.email,password)
        // return (getall)
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {createUserController}
