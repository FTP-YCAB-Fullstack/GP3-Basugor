"use strict";

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
    await queryInterface.bulkInsert("factories", [
      {
        nameFactory: "Yamaha Motor",
        president: "Yoshihiro Hidaka",
        headquarter: "Japan",
        founded: 1955,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameFactory: "Honda Motor Company",
        president: "Takahiro Hochigo",
        headquarter: "Japan",
        founded: 1948,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete('factories', null, {})
  },
};
