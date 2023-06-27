const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    "Point_event",
    {
      id_point_event: {
        type: DataTypes.UUID,
        primaryKey: true
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
