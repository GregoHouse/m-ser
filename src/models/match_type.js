const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Match_type",
    {
      id_match_type: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
          type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      }
    },
    { timestamps: true }
  );
};
