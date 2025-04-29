import Exercicio from "../models/Exercise.js"
import { StatusCodes } from 'http-status-codes'


// Funcao que pede o prompt (o prompt tem que ser personalizado de acordo com a dificuldade passada ( via vir da requisição do usuario?))

export async function listarExercicios(req, res) {
    // Pegar os exercicios pelos status  que vem na requisicao

    try {
        const { filter } = req.query
        const exerciciosEncontrados = await Exercicio.find({ Dificuldade: filter })
        res.status(StatusCodes.OK).send(exerciciosEncontrados)
        console.log(exerciciosEncontrados)

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Deu erro!")
        console.error(error)


    }
    // Procurar pelos exercicios no banco de acordo com o status e devolver



}

export async function pedirExercicio(params) {

}