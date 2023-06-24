const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Sport",
    {
      id_sport: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING
      }
         },
    { timestamps: true }
  );
}
