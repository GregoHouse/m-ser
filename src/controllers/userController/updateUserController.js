  const { User } = require("../../db");
  
  const updateUserController = async (req) => {
    const { id_user } = req.params;
    console.log(req.body)
    console.log(req.params)
    let { body } = req;
    
    if (!id_user) {
      throw new Error("No se especificó el ID del usuario");
    } else {
      body.id_user = parseInt(id_user);
  
      const user = await User.findOne({
        where: { id_user },
      });
      if (!user) throw new Error("No se encontró ningún usuario con ese ID");

      await User.update(body, { where: { id_user: parseInt(id_user) } });
    }
    const userActualizado = await User.findOne({
      where: {id_user}
    });
    const newInfoUser= {
      id_user: userActualizado.id_user,
      name: userActualizado.name.toUpperCase(),
      lastname: userActualizado.lastname,
      gender: userActualizado.gender,
      day_birthday: userActualizado.day_birthday,
      email: userActualizado.email,
      phone: userActualizado.phone,
      credit_card_warranty: userActualizado.credit_card_warranty,
      avatar_img: userActualizado.avatar_img,
    };
    return newInfoUser;
  };
  
  module.exports = { updateUserController };
  