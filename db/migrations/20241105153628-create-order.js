'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pickUpLocation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dropOffLocation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      packageDetails: {
        allowNull: false,
        type: Sequelize.STRING
      },
      deliveryTime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      orderStatus: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      courierInfo: {
        allowNull: true,
        type: Sequelize.STRING,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('order');
  }
};