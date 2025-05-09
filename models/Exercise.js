import { DataTypes, Sequelize } from "sequelize"
import { sequelize } from "../config/dbConnect.js"
import User from "./user.js"

const Exercises = sequelize.define('exercises', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    question: { type: DataTypes.STRING, allowNull: false },
    difficulty: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: "Pendente" },
    data_criacao: {
        type: DataTypes.DATE,
        defaultValue: Date.now
    }
})

export default Exercises



//Cria a tabela 
/*export async function syncExercises() {
    await User.sync({ alter: true })
    console.log('Tabela Exercises criada')
}
*/