const {
  cloudiconfig,
  loadPhoto,
  DeletePhoto,
} = require("../../../utils/cloudinary");
const { User, Sport } = require("../../../db");

module.exports = async (req) => {
  const { id_user } = req.params;

  let { sports } = req.body;

  if (!id_user) {
    throw new Error("No se especificó el ID del usuario");
  } else {
    body.id_user = id_user;

    const user = await User.findOne({
      where: { id_user },
    });

    if (!user) throw new Error("No se encontró ningún usuario con ese ID");

    if (req.files) {
      const { avatar_img } = req.files;
      cloudiconfig();
      if (avatar_img) {
        if (user.avatar_img) await DeletePhoto(user.avatar_img);
        const UpdateAvatarImg = await loadPhoto(
          avatar_img.tempFilePath,
          "User",
          user.email
        );
        body.avatar_img = UpdateAvatarImg.secure_url;
      } else {
        body.avatar_img = user.avatar_img;
      }
    } else {
      body.avatar_img = user.avatar_img;
    }
    await User.update(body, { where: { id_user: id_user } });
  }
  const userActualizado = await User.findOne({
    where: { id_user },
  });

  sports &&
    sports.length > 0 &&
    sports.forEach(async (sport) => {
      const sportRelation = await Sport.findOne({ where: { id_sport: sport } });

      sportRelation.addUser(userActualizado);
    });

  const newInfoUser = {
    id_user: userActualizado.id_user,
    firstname: userActualizado.firstname.toUpperCase(),
    lastname: userActualizado.lastname.toUpperCase(),
    gender: userActualizado.gender,
    day_birthday: userActualizado.day_birthday,
    email: userActualizado.email,
    phone: userActualizado.phone,
    credit_card_warranty: userActualizado.credit_card_warranty,
    avatar_img: userActualizado.avatar_img,
  };
  return newInfoUser;
};
