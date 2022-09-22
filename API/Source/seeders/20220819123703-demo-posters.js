'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('People', [{
      id: 1,
      url: 'https://res.cloudinary.com/dn9lngvwk/image/upload/v1659932406/MXPlayer/data/1_yibby0.webp'
      },
      {
        id: 2,
        url: 'https://res.cloudinary.com/dn9lngvwk/image/upload/v1659932386/MXPlayer/data/7_k01olt.webp'
      },
      {
        id: 3,
        url: 'https://res.cloudinary.com/dn9lngvwk/image/upload/v1659932297/MXPlayer/data/image1_yae8xe.webp'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
