import Exam from "../models/exam.js"

export async function getCompletedExamsUseCase(userId) {
    // verifica o id 
    // pega as provas desse usuario que tem o status como "Completa"
    try {
        const allCompletedExams = await Exam.findAll({ where: { status: "Completa", userId } })
        if (allCompletedExams, length === 0) {
            return []
        }
        return allCompletedExams
    } catch (error) {
        console.error(error)
        throw error
    }
}