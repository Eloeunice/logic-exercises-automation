import mongoose from "mongoose"
const { Schema } = mongoose


const exercicioSchema = new Schema({
    Pergunta: { type: String, required: true },
    Dificuldade: { type: String, required: true },
    status: { type: String, default: "Pendente" },
    data_criacao: {
        type: Date,
        default: Date.now
    }
})

const Exercicio = mongoose.model('Exercicio', exercicioSchema)

export default Exercicio