const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Admin",
    {
      id_admin: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },

    { timestamps: true }
  );
};
