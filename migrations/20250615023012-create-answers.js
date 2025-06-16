'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('answers', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      exerciseId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'exercises',  // Nome da tabela Exercises no banco
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: true,  // Se quiser, pode mudar pra false
      },
      response: {
        type: Sequelize.TEXT,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',  // Nome da tabela Users no banco
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('answers');

  }
};
