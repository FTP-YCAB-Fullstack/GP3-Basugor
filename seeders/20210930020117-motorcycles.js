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
   await queryInterface.bulkInsert('motorcycles', [
     {
       motorName: "Beat eSP FI",
       price: 18000000,
       factoryId: 1,
       engineId: 1,
       typeId: 1,
       releaseYear: 2012,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      motorName: "Mio",
      price: 18000000,
      factoryId: 1,
      engineId: 1,
      typeId: 1,
      releaseYear: 2005,
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
    await queryInterface.bulkDelete('motorcycles', null, {})
  }
};
