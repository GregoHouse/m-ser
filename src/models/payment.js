const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Payment",
    {
      id_payment: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING
       },
      amount: {
        type: DataTypes.INTEGER
      },
      date_time_update: {
        type: DataTypes.STRING
      }
    },
    { timestamps: true }
  );
}
