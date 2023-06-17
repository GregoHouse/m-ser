const recoveryPassword = require('../controllers/recoveryPassword.js');

const recoveryPasswordHandler = async (req, res) => {
    try {
        const {email} = req.body;
        res.status(200).json(await recoveryPassword(email))
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

module.exports = recoveryPasswordHandler;
