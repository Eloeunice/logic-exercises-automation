import { DataTypes, Sequelize } from "sequelize"
import { sequelize } from "../config/dbConnect.js"


const Exercicio = sequelize.define('Exercises', {
    Pergunta: { type: DataTypes.STRING, allowNull: false },
    Dificuldade: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, default: "Pendente" },
    data_criacao: {
        type: DataTypes.DATE,
        default: Date.now
    }
})

export default Exercicio