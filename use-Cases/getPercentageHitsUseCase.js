import { Answer, Feedback } from "../models/index.js"



export async function getPercentageHitsUseCase(id) {
    // pegar a quantidade de questoes com is_correct = true e o total de exercicios 
    const totalQuestions = await Answer.count({ where: { userId: id } })
    const totalCorrectQuestions = await Answer.count({
        where: { userId: id }, include: [{
            model: Feedback,
            where: { is_correct: true }
        }]
    })
    // fazer o calculo
    if (totalQuestions === 0) return 0 // evita divisão por zero

    const percentageHits = (totalCorrectQuestions / totalQuestions) * 100

    return percentageHits
}