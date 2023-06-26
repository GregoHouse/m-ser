const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Reservation_type",
    {
      id_reservation_type: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      permanent: {
        type: DataTypes.BOOLEAN
      }
    },
    { timestamps: true }
  );
};
