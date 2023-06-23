const loginUserController = require('../controllers/userController/loginUserController.js');

const loginUserHandler = async (req, res) => {
    try {
        const {email, password} = req.body;
        const token = await loginUserController(email , password);
        
        if (token) {
            return res.status(200).json(token)
        }

        res.status(401).json({message: 'The password is not valid'})
    } catch(error) {
        res.status(404).json({error: error.message}) 
    }
};

module.exports = loginUserHandler;
