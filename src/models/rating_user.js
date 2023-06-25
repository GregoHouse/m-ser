const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Rating_user",
    {
      id_rating: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      category_lvl: {
          type: DataTypes.STRING
      },
      defense: {
        type: DataTypes.STRING
      },
      attack: {
        type: DataTypes.STRING
      },
      control: {
        type: DataTypes.STRING
      }
    },
    { timestamps: true }
  );
};
