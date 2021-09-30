"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class factory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.motorcycle, {foreignKey: 'factoryId'})
    }
  }
  factory.init(
    {
      nameFactory: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      president: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      headquarter: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      founded: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "factory",
    }
  );
  return factory;
};
