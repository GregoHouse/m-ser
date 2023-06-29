const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Location",
    {
      id_location: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING
      },
      adress: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      },
      state: {
        type: DataTypes.STRING
      },
      postal_code: {
        type: DataTypes.INTEGER
      },
      country: {
        type: DataTypes.STRING
      }
    },
    { timestamps: true }
  );
}
