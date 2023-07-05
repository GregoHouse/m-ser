const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Match_result",
    {
      id_match_result: {
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
};
