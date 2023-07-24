const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Admin_user",
    {
      id_admin_user: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },

    { timestamps: true }
  );
};
