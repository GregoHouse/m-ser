const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "RecoveryCode",
    {
      id_code: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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
