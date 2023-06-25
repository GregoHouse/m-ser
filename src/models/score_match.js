const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Score_match",
    {
      id_score: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      first_set: {
        type: DataTypes.STRING
      },
      second_set: {
        type: DataTypes.STRING
      },
      third_set: {
        type: DataTypes.STRING
      }
    },
    { timestamps: true }
  );
}
