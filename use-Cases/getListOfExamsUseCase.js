import Exam from "../models/exam.js";


export async function getListOfExamsUseCase(id) {
    const provasListadas = Exam.findAll({ where: { userId: id } })
    return provasListadas
}