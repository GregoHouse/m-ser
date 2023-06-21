const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "RecoveryCode",
    {
      id_code: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      code: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      }
         },
    { timestamps: true }
  );
}
