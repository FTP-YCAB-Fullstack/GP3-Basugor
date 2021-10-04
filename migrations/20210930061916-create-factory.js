'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('factories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameFactory: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      president:  {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      headquarter: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      founded: {
        type: Sequelize.INTEGER(4),
        allowNull:false
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
    await queryInterface.dropTable('factories');
  }
};