import { Exam } from "../models"
import Exercises from '../models/exercise.js';
import User from "../models/user.js"

export async function getExam({ difficulty, feat }, id) {
    /*Para criar a prova, precisa: 
        - Pegar todos exercicios com a dificuldade informada OK
        - Juntas todos eles e trazer como as questoes da prova OK
        - Preciso associar a prova ao userId    OK
        - Preciso salvar o feat dessa prova OK
        */

    const question = await Exercises.findAll({ where: { difficulty } })
    console.log(question)
    const questionExam = []

    for (i in question) {
        questionExam.push(i)
    }
    const user = await User.findByPk(id);
    console.log(user)
    // pega a dificuldade e monta a prova baseada nisso
    const prova = await Exam.create({ difficulty: difficulty, feat: feat, userId: user.id })
    // salva a prova no banco
    return prova
}