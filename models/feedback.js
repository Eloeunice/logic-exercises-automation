import { sequelize } from "../config/dbConnect.js"
import { DataTypes } from "sequelize"

const Feedback = sequelize.define('feedback', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    answerId: {
        type: DataTypes.INTEGER
    },
    feat: { type: DataTypes.INTEGER },
    is_correct: { type: DataTypes.BOOLEAN },
    comment: { type: DataTypes.TEXT }
})

//Cria a tabela 
/*export async function syncFeedback() {
    await Feedback.sync({ alter: true })
    console.log('Tabela Exercises criada')
}*/

export default Feedback