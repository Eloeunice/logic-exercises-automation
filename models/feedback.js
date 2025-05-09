import { sequelize } from "../config/dbConnect"
import { DataTypes } from "sequelize"
import Answer from "./answer.js"

const Feedback = sequelize.define('feedback', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    answerId: {
        type: DataTypes.INTEGER, references: {
            model: Answer,
            key: 'id'
        }
    },
    feat: { type: DataTypes.INTEGER },
    is_correct: { type: DataTypes.BOOLEAN },
    comment: { type: DataTypes.TEXT }
})

// Definindo relacionamento 
Answer.hasOne(Feedback, { foreignKey: 'answerId' })
Feedback.belongsTo(Answer, { foreignKey: 'answerId' })


export default Feedback