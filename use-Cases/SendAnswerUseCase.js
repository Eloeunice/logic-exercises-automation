import Answer from "../models/answer.js"
import Exercises from "../models/exercise.js"
import Feedback from "../models/feedback.js"
import User from "../models/user.js"
import { gerarFeedback } from "../services/openaiService.js"

export async function enviarRespostaExercicio({ exerciseId, response }, id) {
    // ir no banco e procurar o id do exercicio que corresponde ao exerciseId
    const exercicioCorrespondente = await Exercises.findOne({ where: { id: exerciseId } })
    const exercicioRespondido = await Exercises.afterFind(exercicioCorrespondente, { status: "Completo" })

    // chamar a openai enviando a question e a resposta
    const feedback = await gerarFeedback({ exercicioCorrespondente, response })

    // o userid tem que ser pego do token
    const user = await User.findByPk(id);
    // o response e o exerciseID tem que ser pego da requisicao

    // guardar no banco A RESPOSTA DO EXERCICIO - FEEDBACK DO EXERCICIO
    const respostaCriada = await Answer.create({ exerciseId: exercicioCorrespondente.id, response: response, userId: user.id })
    const feedbackCriado = await Feedback.create(feedback)

    console.log(respostaCriada)
    console.log(feedbackCriado)


    // retornar o resposta e o feedback (juntos só pra ver)
    return feedback
}