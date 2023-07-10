const { User, Sport } = require("../../db");

const updateUserController = async (req) => {
  const { id_user } = req.params;
  console.log(req.body);
  console.log(req.params);
  let { body } = req;
  let { sports } = body;

  if (!id_user) {
    throw new Error("User ID is required");
  } else {
    body.id_user = parseInt(id_user);

    const user = await User.findOne({
      where: { id_user },
    });
    if (!user) throw new Error("No user found with that ID");

    await User.update(body, { where: { id_user: parseInt(id_user) } });
  }
  const userActualizado = await User.findOne({
    where: { id_user },
  });

  sports &&
    sports.length > 0 &&
    sports.forEach(async (sport) => {
      const sportDB = await Sport.findOne({ where: { id_sport: sport } });
    });
  const newInfoUser = {
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
