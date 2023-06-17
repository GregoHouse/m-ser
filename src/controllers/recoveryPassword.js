const {User} = require('../db.js');
const nodemailer = require('nodemailer');

const recoveryPassword = async (email) => {
    await User.create({
        name: "Diego",
        lastname: "Amundaray",
        gender: "Male",
        day_birth: "13/12/2002",
        email: "diegoamundaray2017@gmail.com",
        phone: "3212675542",
        credit_card_warranty: "qewqewqrwqrewq",
        avatar_img: '231321312321',
        password: '123456'
    })
    const { id_user, name, password } = await User.findOne({
        where: {
            email
        }
    });   
    async function main() {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "diegoamundaray2017@gmail.com", // generated ethereal user
            pass: "mqubdxwmzrkovhuf", // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: '"Matchig Team " <diegoamundaray2017@gmail.com>', // sender address
        to: "diegoamundaray2017@gmail.com", // list of receivers
        subject: "Recovery Password for Matching", // Subject line
        text: `Hello, Your password with user id ${id_user} is ${password}`, // plain text body
    });

    console.log("Message sent: %s", info.messageId);

    }
    
    main().catch(console.error)

};


module.exports = recoveryPassword;
