const forgotPassword = require('../controllers/recoveryPasswordControllers/forgotPassword.js');

const forgotPasswordHandler = async (req, res) => {
    try {
        const {email} = req.body;
        const validateEmail = await forgotPassword(email);
        if (validateEmail) {
            return res.status(200).json({message: 'The mail with code has been sent'})
        }
        res.status(401).json({error: 'The email is not found in database'})
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

module.exports = forgotPasswordHandler;
