
/** @type {import('sequelize-cli').Migration} */
export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('exams', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      time_limit: {
        type: Sequelize.INTEGER,
      },
      difficulty: {
        type: Sequelize.STRING,
      },
      feat: {
        type: Sequelize.INTEGER,
      },
      final_media: {
        type: Sequelize.DECIMAL(10, 2),
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'Pendente',
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',    // Nome exato da tabela no banco
          key: 'id',
        },
        onDelete: 'CASCADE',  // Se o user for deletado, deleta as provas dele também
        allowNull: true,       // Se quiser, pode mudar pra false se quiser forçar que toda prova tenha user
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
    await queryInterface.dropTable('exams');

  }
};
