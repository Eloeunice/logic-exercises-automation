import { DataTypes } from "sequelize"
import { sequelize } from "../config/dbConnect.js"

const Exercises = sequelize.define('Exercisess', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    question: { type: DataTypes.TEXT },
    difficulty: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: "Pendente" },
    data_criacao: {
        type: DataTypes.DATE,
        defaultValue: Date.now
    },
    examId: {
        type: DataTypes.INTEGER
    },
    userId: {
        type: DataTypes.INTEGER, references: {
            model: 'User',
            key: 'id'
        }
    }
}, {
    tableName: 'exercises',
    timestamps: false,
})

Exercises.associate = (models) => {
    Exercises.belongsTo(models.User, { foreignKey: 'userId' });
    Exercises.hasMany(models.Answer, { foreignKey: 'exercisesId' });
    Exercises.belongsTo(models.Exam, { foreignKey: 'examId' });
}


export default Exercises
