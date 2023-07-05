const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Reservation",
    {
      id_reservation: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      date_time_start: {
        type: DataTypes.STRING 
    },
      date_time_end: {
        type: DataTypes.STRING 
    },
      total_cost: {
        type: DataTypes.STRING
      }
    },
    { timestamps: true }
  );
}
