'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('engines', [
     {
       transmission: 'Automatic Clutch',
       stroke: 4,
       gearbox: 0,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       transmission: 'Automatic Continous Variable',
       stroke: 4,
       gearbox: 0,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       transmission: 'Semi Automatic',
       stroke: 4,
       gearbox: 4,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       transmission: 'Manual',
       stroke: 4,
       gearbox: 4,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       transmission: 'Manual Mechanic',
       stroke: 2,
       gearbox: 4,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       transmission: 'Manual Sport',
       stroke: 4,
       gearbox: 6,
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('engines', null, {})
  }
};
