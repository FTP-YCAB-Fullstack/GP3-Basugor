'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class engine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.motorcycle, {foreignKey: 'engineId'})
    }
  };
  engine.init({
    transmission: { 
      type: DataTypes.STRING(50),
      allowNull: false
    },
    stroke: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    gearbox: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'engine',
  });
  return engine;
};