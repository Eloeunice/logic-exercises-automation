import mongoose from "mongoose"
const { Schema } = mongoose


const exercicioSchema = new Schema({
    pergunta: String,
    dificuldade: String,
    status: String,
    data_criacao: {
        type: Date,
        default: Date.now
    }
})

const Exercicio = mongoose.model('Exercicio', exercicioSchema)

export default Exercicio