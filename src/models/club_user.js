const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Club_user",
    {
      id_club_user: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },

    { timestamps: true }
  );
};
