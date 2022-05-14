'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false, 
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false, 
      },
      senha_hash: {
        type: Sequelize.STRING,
        allowNull: false, 
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    })

  },

  async down (queryInterface, Sequelize) {
     
    return queryInterface.dropTable('users')

  }
};
