'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('engines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transmission: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      stroke: {
        type: Sequelize.INTEGER(2),
        allowNull: false
      },
      gearbox: {
        type: Sequelize.INTEGER(2),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('engines');
  }
};