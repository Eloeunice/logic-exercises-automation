
/** @type {import('sequelize-cli').Migration} */
export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('exercises',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        question: {
          type: Sequelize.TEXT,
        },
        difficulty: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        status: {
          type: Sequelize.STRING,
          defaultValue: 'Pendente',
        },
        data_criacao: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('NOW'),
        },
        examId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'exams',
            key: 'id',
          },
          onDelete: 'CASCADE',
          allowNull: true,
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
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
      });;

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('exercises');

  }
};
