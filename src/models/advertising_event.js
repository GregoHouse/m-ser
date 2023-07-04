const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    "Advertising_event",
    {
      id_advertising_event: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING
      },
      date_time: {
        type: DataTypes.DATE
      },
      qr_code: {
          type: DataTypes.STRING
      }
    }
        ,
    { timestamps: true }
  );
}
