import Exercises from "../models/exercise.js"
import { gerarExercicio } from "../services/openaiService.js"
// recebe o req.body  e o modelo
export async function getExercise({ difficulty }, exerciseModel) {
    // recebe os parametros que o controller vai ter enviado
    // manda pro service e recebe
    const newExercise = await gerarExercicio(difficulty)
    // conversa com o banco para criar o novo exercicio e retorna
    const exercicio = await Exercises.create(newExercise)
    console.log(difficulty)
    return exercicio

}