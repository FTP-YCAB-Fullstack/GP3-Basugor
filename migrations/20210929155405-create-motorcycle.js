'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('motorcycles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      motorName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          notNull: true
        }
      },
      price: {
        type: DataTypes.INTEGER(40),
        allowNull: false,
        validate: {
          notNull: true
        }
      },
      factoryId:{
        type: DataTypes.INTEGER(3),
        allowNull: false,
        validate: {
          notNull: true
        }
      },
      engineId: {
        type: DataTypes.INTEGER(3),
        allowNull: false,
        validate: {
          notNull: true
        }
      },
      typeId: {
        type: DataTypes.INTEGER(3),
        allowNull: false,
        validate: {
          notNull: true
        }
      },
      releaseYear: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        validate: {
          notNull: true
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('motorcycles');
  }
};