const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Brand",
    {
      id_brand: {
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

      brand_name: {
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
