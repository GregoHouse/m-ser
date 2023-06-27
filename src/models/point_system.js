const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    "Point_system",
    {
      id_point_system: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      },
      description: {
          type: DataTypes.TEXT
      },
      points_quantity_gain: {
        type: DataTypes.INTEGER
      }
    }
        ,
    { timestamps: true }
  );
}