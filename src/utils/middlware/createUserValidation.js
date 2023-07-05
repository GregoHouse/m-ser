const ClientError  = require("../errors");

module.exports = (req, res, next) => {
    let {
        name, lastname, email, location, password} = req.body;
    if (name && lastname && email && location && password){ 
        //? validacion de correo electronico
        const valueEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const valeuPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
        if (!valueEmail.test(email)) {
            throw new ClientError("el correo no es correcto", 401);
        }
        /**
        *?  validacion password del password
        *? - Minimo 8 caracteres
        *? - Maximo 15
        *? - Al menos una letra mayúscula
        *? - Al menos una letra minucula
        *? - Al menos un numero
        *? - No espacios en blanco
        *? - Al menos 1 caracter especial  */
        
        if (!valeuPassword.test(password)) {
            throw new ClientError("Contraseña no cumple los requisitos", 401);
        }

        return next();
    }
    else {
        throw new ClientError("Debe rellenar los campos obligatorios", 401);
    }
}