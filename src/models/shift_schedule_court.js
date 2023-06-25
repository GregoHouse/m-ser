const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Shift_schedule_court",
    {
      id_shift_schedule_court: {
        type: DataTypes.UUID,
        primaryKey: true
      },
    },
    { timestamps: true }
  );
};
