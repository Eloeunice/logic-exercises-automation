import Exercises from '../models/exercise.js'
import { StatusCodes } from 'http-status-codes'
import { getExercise } from "../use-Cases/GetExerciseUseCase.js"
import { where } from 'sequelize'


export async function listarExercicios(req, res) {
    // Pegar os exercicios pelos status  que vem na requisicao

    try {
        const userId = req.user.id
        const { filter } = req.query
        const exerciciosEncontrados = await Exercises.findAll({ where: { userId } })
        res.status(StatusCodes.OK).send(exerciciosEncontrados)
        console.log(exerciciosEncontrados)

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Deu erro!")
        console.error(error)


    }
    // Procurar pelos exercicios no banco de acordo com o status e devolver
}

export async function pedirExercicio(req, res) {
    try {
        // receber a requisicao
        // chama a funcao do use case
        const userId = req.user.id
        const exercicio = await getExercise(req.body, userId)
        console.log(exercicio)
        // devolve o exercicio para o usuario
        res.status(200).send(exercicio)

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Deu erro!")
        console.error(error)
    }


}