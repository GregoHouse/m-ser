const resetPassword = require('../controllers/recoveryPasswordControllers/resetPassword.js');

const resetPasswordHandler = async (req, res) => {
    try {
        const {email, code, newPassword} = req.body;
        const validatePassword = await resetPassword(email, code, newPassword);
        if (validatePassword) {
            return res.status(200).json({message: 'The password has been change'})
        }
        res.status(401).json({error: 'The code is not valid'}); 
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

module.exports = resetPasswordHandler;
