const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      // id_location: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true,
      // },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      day_birth: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      credit_card_warranty: {
        type: DataTypes.STRING,
      },

      avatar_img: {
        type: DataTypes.STRING,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },

    { timestamps: true }
  );
};
