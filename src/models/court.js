const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Court",
    {
      id_court: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      price_fee: {
        type: DataTypes.STRING
      },
      warranty_reservation: {
        type: DataTypes.STRING
      },
      grass_type: {
        type: DataTypes.STRING
      },
      lighting: {
        type: DataTypes.STRING
      },
      doors_type: {
        type: DataTypes.STRING
      },
      walls_type: {
        type: DataTypes.STRING
      },
      reputation: {
        type: DataTypes.STRING
      }
    },
    { timestamps: true }
  );
}
