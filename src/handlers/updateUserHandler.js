const {updateUserController} = require("../controllers/userController/updateUserController");
const { catchedAsync } = require("../utils");

  const updateUserHandler = async (req, res) => {
    
    try {
      const updatedUser = await updateUserController(req);
      return res.status(200).json(updatedUser);
    } catch (error){
      console.log(error.message);
      return res.status(400).json({ message: error.message });
    }
  };
  
  module.exports = { updateUserHandler: catchedAsync(updateUserHandler) };