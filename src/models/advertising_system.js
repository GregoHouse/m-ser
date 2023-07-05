const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    "Advertising_system",
    {
      id_advertising_system: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      id_brand: {
        type: DataTypes.UUID
      },
      name: {
        type: DataTypes.STRING
      },
      description_discount: {
        type: DataTypes.STRING
      },
      points_quantity_redeem: {
          type: DataTypes.INTEGER
      }
    }
        ,
    { timestamps: true }
  );
}
