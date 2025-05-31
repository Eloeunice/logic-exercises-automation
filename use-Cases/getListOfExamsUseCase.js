import { Exam } from "../models";


export async function getListOfExamsUseCase(id) {
    const provasListadas = Exam.findAll({ where: { userId: id } })
    return provasListadas
}