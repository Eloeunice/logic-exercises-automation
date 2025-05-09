import { sequelize } from "../config/dbConnect"
import { DataTypes } from "sequelize"
import Exercises from "./Exercise.js"
import User from "./user.js"

const Answer = sequelize.define('answer', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    exerciseId: {
        type: DataTypes.INTEGER,
        references: {
            model: Exercises,
            key: 'id'
        }
    },
    response: { type: DataTypes.TEXT },
    userId: {
        type: DataTypes.INTEGER, references: {
            model: User,
            key: 'id'
        }
    }
})

// No caso, resposta vai ser responsavel por unir respostas e users

User.hasMany(Answer, { foreignKey: 'userId' }) // 1 usuario pode ter varias respostas (de diferentes usuarios)
Answer.belongsTo(User, { foreignKey: 'userId' })

Exercises.hasMany(Answer, { foreignKey: 'exerciseId' }) // 1 exercicio pode ter diversas respostas (de diferentes usuarios)
Answer.belongsTo(Exercises, { foreignKey: 'exerciseId' })


export default Answer