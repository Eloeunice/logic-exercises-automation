
/** @type {import('sequelize-cli').Migration} */
export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('feedbacks', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      answerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'answers',  // Nome da tabela Answers no banco
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: true, // ou false se quiser obrigatório
      },
      feat: {
        type: Sequelize.INTEGER,
      },
      is_correct: {
        type: Sequelize.BOOLEAN,
      },
      comment: {
        type: Sequelize.TEXT,
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
    })

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('feedbacks');

  }
};
