const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Club",
    {
      id_club: {
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

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      club_name: {
        type: DataTypes.STRING,
      },
      showers: {
        type: DataTypes.STRING,
      },
      grills: {
        type: DataTypes.STRING,
      },
      parking: {
        type: DataTypes.STRING,
      },
      security: {
        type: DataTypes.STRING,
      },

      available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: true }
  );
};
