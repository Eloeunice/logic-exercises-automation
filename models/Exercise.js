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
    }
})

export default Exercises

const options = ['iniciante', 'intermediario', 'avancado']
// verificar se difficulty é "Iniciante", "Intermediário" ou "Avançado"
export const getExercise = z.object({
    difficulty: z.string()
        .transform((val) => val.toLowerCase())
        .refine((value) => options.includes(value), { message: "Precisa ser um desse níveis Iniciante, Intermediário ou Avançado" }),
})