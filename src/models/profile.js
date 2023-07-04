const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Profile",
    {
      id_profile: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      laterality: {
        type: DataTypes.INTEGER,
      },

      court_side: {
        type: DataTypes.INTEGER,
      },

      match_type: {
        type: DataTypes.INTEGER,
      },

      day_preference: {
        type: DataTypes.STRING,
      },

      time_preference: {
        type: DataTypes.STRING,
      },

      category_lvl: {
        type: DataTypes.STRING,
      },
    },

    { timestamps: true }
  );
};
