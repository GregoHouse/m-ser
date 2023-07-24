const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Sport_user",
    {
      id_sport_user: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      day_birth: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      credit_card_warranty: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      avatar_img: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },

    { timestamps: true }
  );
};
