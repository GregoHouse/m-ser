const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Club",
    {
      id_club: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING
      },
      showers: {
        type: DataTypes.STRING
      },
      grills: {
        type: DataTypes.STRING
      },
      parking: {
        type: DataTypes.STRING
      },
      security: {
        type: DataTypes.STRING
      }
    },
    { timestamps: true }
  );
}
