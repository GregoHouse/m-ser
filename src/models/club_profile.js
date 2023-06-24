const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Club_profile",
    {
      id_club_profile: {
        type: DataTypes.UUID,
        primaryKey: true
      },
    },
    { timestamps: true }
  );
};
