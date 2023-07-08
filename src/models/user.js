const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id_user: {
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

      gender: {
        type: DataTypes.STRING,
        defaultValue: null,
      },

      day_birth: {
        type: DataTypes.STRING,
        defaultValue: null,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      phone: {
        type: DataTypes.STRING,
      },

      credit_card_warranty: {
        type: DataTypes.STRING,
        defaultValue: null,
      },

      avatar_img: {
        type: DataTypes.STRING,
        defaultValue: null,
      },

      brand_name: {
        type: DataTypes.STRING,
        defaultValue: null,
      },

      club_name: {
        type: DataTypes.STRING,
        defaultValue: null,
      },

      showers: {
        type: DataTypes.BOOLEAN,
        defaultValue: null,
      },
      grills: {
        type: DataTypes.BOOLEAN,
        defaultValue: null,
      },
      parking: {
        type: DataTypes.BOOLEAN,
        defaultValue: null,
      },
      security: {
        type: DataTypes.BOOLEAN,
        defaultValue: null,
      },
    },

    { timestamps: true }
  );
};
