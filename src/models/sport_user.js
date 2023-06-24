const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Sport_user",
    {
      id_sport_user: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
    },
    { timestamps: true }
  );
};
