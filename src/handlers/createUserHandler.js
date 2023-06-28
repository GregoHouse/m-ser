const {createUserController} = require("../controllers/userController/createUserController")
const { catchedAsync } = require("../utils");
 
const createUserHandler = async (req,res) =>{
    try {
        const result = await createUserController(req)
        res.status(200).json(result)
    } catch (error) {
        console.log(error.message);
        res.status(400).json({error:error.message})
    }
}
module.exports = {
    createUserHandler: catchedAsync(createUserHandler)
};