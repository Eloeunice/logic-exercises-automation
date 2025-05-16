import { sequelize } from "../config/dbConnect.js"
import { DataTypes } from "sequelize"


const Exam = sequelize.define('exam', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    time_limit: { type: DataTypes.INTEGER },
    difficulty: { type: DataTypes.STRING },
    feat: { type: DataTypes.INTEGER },
    final_media: { type: DataTypes.DECIMAL(10, 2) },
    status: { type: DataTypes.STRING }
})

export default Exam

const options = ['iniciante', 'intermediario', 'avancado']
// verificar se difficulty é "Iniciante", "Intermediário" ou "Avançado"
export const getExam = z.object({
    difficulty: z.string()
        .transform((val) => val.toLowerCase())
        .refine((value) => options.includes(value), { message: "Precisa ser um desse níveis Iniciante, Intermediário ou Avançado" }),
})