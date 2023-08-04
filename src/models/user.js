const { DataTypes, Model } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
  class User extends Model {
    async validatePassword(password) {
      return await bcrypt.compare(password, this.password);
    }
  }

  User.init(
    {
      id_user: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      gender: {
        type: DataTypes.STRING,
        defaultValue: null,
      },

      day_birth: {
        type: DataTypes.STRING,
        defaultValue: null,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      phone: {
        type: DataTypes.STRING,
      },

      credit_card_warranty: {
        type: DataTypes.STRING,
        defaultValue: null,
      },

      avatar_img: {
        type: DataTypes.STRING,
        defaultValue: null,
      },

      brand_name: {
        type: DataTypes.STRING,
        defaultValue: null,
      },

      available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      hooks: {
        beforeCreate: async (User) => {
          const salt = await bcrypt.genSalt();
          User.password = await bcrypt.hash(User.password, salt);
        },
      },
      sequelize,
      modelName: "User",
      timestamps: true,
    }
  );

  return User;
};
