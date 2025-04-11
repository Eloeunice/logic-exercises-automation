import { gerarExercicio } from "../services/openaiService.js"
import Exercicio from "../models/Exercise.js"
import { StatusCodes } from 'http-status-codes'


// Funcao que pede o prompt (o prompt tem que ser personalizado de acordo com a dificuldade passada ( via vir da requisição do usuario?))

export async function pedirNovoExercicio(req, res) {
    // Pegar o nível de dificuldade da requisição enviado pelo usuario no TELEGRAM

    try {
        //Mandar para o service // Receber o exercicio do service e criar no banco
        const { dificuldade } = req.body
        const novoExercicio = await gerarExercicio(dificuldade) // espera o exercicio ser criado
        const exercicioSalvo = await Exercicio.create(novoExercicio) // espera o exercicio criado ser salvo
        console.log("Exercio salvo no banco com sucessso")
        // retorna o exercicio
        return res.status(StatusCodes.CREATED).json(exercicioSalvo);

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Ocorreu um erro aqui!")
        console.log(error)
    }


}

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