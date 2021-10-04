'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.motorcycle, {foreignKey: 'typeId'})
    }
  };
  type.init({
    name: {
     type: DataTypes.STRING(50),
     allowNull: false
    },   
    foundedYear: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }, 
    foundedCountry: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'type',
  });
  return type;
};