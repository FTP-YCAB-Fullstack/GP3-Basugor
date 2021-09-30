"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class motorcycle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.user, { through: "usersmotors" });
      this.belongsTo(models.factory, {foreignKey: 'factoryId'})
    }
  }
  motorcycle.init(
    {
      motorName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
      price: {
        type: DataTypes.INTEGER(40),
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
      factoryId: {
        type: DataTypes.INTEGER(3),
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
      engineId: {
        type: DataTypes.INTEGER(3),
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
      typeId: {
        type: DataTypes.INTEGER(3),
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
      releaseYear: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
    },
    {
      sequelize,
      modelName: "motorcycle",
    }
  );
  return motorcycle;
};
