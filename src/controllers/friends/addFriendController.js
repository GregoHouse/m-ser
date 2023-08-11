const { Friend , User } = require('../../db')

const addFriendController = async (data) => {
    const newFriend = await Friend.create({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        gender: data.gender,
        day_birth: data.day_birth,
        avatar_img: data.avatar_img,
        bloqueado: data.bloqueado
    });

    const user = await User.findByPk(data.id_user);
    
    await newFriend.addUser(user)
};

module.exports = addFriendController;
