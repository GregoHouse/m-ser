const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Shift_schedule",
    {
      id_shift_schedule: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING
      },
      week_day: {
        type: DataTypes.STRING
      },
      time_start: {
        type: DataTypes.STRING
      },
      time_end: {
        type: DataTypes.STRING
      },
      partner_priority: {
        type: DataTypes.STRING
      },
    },
    { timestamps: true }
  );
};
