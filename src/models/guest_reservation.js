const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Guest_reservation",
    {
      id_guest_reservation: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
    },
    { timestamps: true }
  );
};
