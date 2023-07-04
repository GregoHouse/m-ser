const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Payment_type",
    {
      id_payment_type: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING
      }
         },
    { timestamps: true }
  );
}
