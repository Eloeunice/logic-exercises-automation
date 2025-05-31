import Exam from "../models/exam.js"
import Exercises from '../models/exercise.js';
import User from "../models/user.js"

export async function getExam({ difficulty, feat }, id) {
    /*Para criar a prova, precisa: 
        - Pegar todos exercicios com a dificuldade informada OK
        - Juntas todos eles e trazer como as questoes da prova OK
        - Preciso associar a prova ao userId    OK
        - Preciso salvar o feat dessa prova OK
        */

    const questions = await Exercises.findAll({ where: { difficulty } })
    if (!questions || questions.length === 0) {
        console.log(`Nenhum exercício encontrado com dificuldade: ${difficulty}`);
        return null;
    }

    const timeLimit = 0
    if (difficulty == "avançado") {
        return timeLimit = 30
    } else if (difficulty == "intermediario") {
        return timeLimit = 20
    } else if (difficulty == "iniciante") {
        return timeLimit = 15
    }

    console.log(`Exercícios encontrados: ${questions}`)
    const questionExam = questions.map(question => ({ question }))


    console.log("Exercícios da prova:", questionExam);

    const user = await User.findByPk(id);
    console.log(user)
    // pega a dificuldade e monta a prova baseada nisso
    const exam = await Exam.create({ difficulty: difficulty, feat: feat, userId: user.id, time_limit: timeLimit })

    // colocar examId nos exercicios
    const questionExamWithId = await Promise.all(questions.map(question => Exercises.update({ examId: exam.id }, { where: { id: question.id } })))

    // salva a prova no banco
    return questionExam
}

