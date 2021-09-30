"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usersmotor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usersmotor.init(
    {
      userId: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        onDelete: "CASCADE",
      },
      motorId: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "usersmotor",
    }
  );
  return usersmotor;
};
