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
   await queryInterface.bulkInsert('types', [
     {
       name: 'Scooter',
       foundedYear: 1915,
       foundedCountry: 'Italy',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: 'Sport',
      foundedYear: 1894,
      foundedCountry: 'France',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Adventure Tourer',
      foundedYear: 1947,
      foundedCountry: 'Spain',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jetsky',
      foundedYear: 1992,
      foundedCountry: 'Japan',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sport Tourer',
      foundedYear: 1967,
      foundedCountry: 'Northern Ireland',
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
    await queryInterface.bulkDelete('types', null, {});
  }
};
