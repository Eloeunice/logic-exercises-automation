import Answer from "../models/answer.js"
import Feedback from "../models/answer.js"



export async function getPercentageErrorsUseCase(id) {
    // pegar a quantidade de questoes com is_correct = true e o total de exercicios 
    const totalQuestions = await Answer.count({ where: { userId: id } })
    console.log(totalQuestions)
    const totalWrongQuestions = await Answer.count({
        where: { userId: id }, include: [{
            model: Feedback,
            where: { is_correct: false }
        }]
    })
    console.log(totalWrongQuestions)
    // fazer o calculo
    if (totalQuestions === 0) return 0 // evita divisão por zero

    const percentageErrors = (totalWrongQuestions / totalQuestions) * 100

    return percentageErrors
}