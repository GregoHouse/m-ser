const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Friend",
    {
      id_friend: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      gender: {
        type: DataTypes.STRING,
        defaultValue: null,
      },

      day_birth: {
        type: DataTypes.STRING,
        defaultValue: null,
      },

      phone: {
        type: DataTypes.STRING,
      },

      avatar_img: {
        type: DataTypes.STRING,
        defaultValue: null,
      },

      bloqueado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },

    { timestamps: true }
  );
};
