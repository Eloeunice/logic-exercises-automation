import { DataTypes } from "sequelize"
import { sequelize } from "../config/dbConnect.js"
import { z } from "zod"

const Exercises = sequelize.define('exercises', {
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
    }
})

const options = ['iniciante', 'intermediario', 'avancado']
// verificar se difficulty é "Iniciante", "Intermediário" ou "Avançado"
export const getExercise = z.object({
    difficulty: z.string()
        .transform((val) => val.toLowerCase())
        .refine((value) => options.includes(value), { message: "Precisa ser um desse níveis Iniciante, Intermediário ou Avançado" }),
})

//Cria a tabela 
export async function syncFeedback() {
    await Exercises.sync({ force: true })
    console.log('Tabela Exercises criada')
}

export default Exercises
