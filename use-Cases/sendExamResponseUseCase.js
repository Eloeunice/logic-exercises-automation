import Exam from "../models/exam.js";
import Exercises from "../models/exercise.js";
import { enviarRespostaExercicio } from "./SendAnswerUseCase.js";


function calcularMediaProva(provaFeat, exerciciosProva) {
    const questoesCertas = exerciciosProva.filter(
        exercicio => exercicio.feat > provaFeat
    ).length;

    const totalQuestoes = exerciciosProva.length;
    const media = questoesCertas / totalQuestoes;

    return { questoesCertas, totalQuestoes, media };
}

export async function sendExamResponsesUseCase({ examId, response }, userId) {
    // receber o id do exame recebido pelo usuario
    // pegar a prova e o feat
    const prova = await Exam.findOne({ where: { id: examId }, attributes: ['id', 'feat', 'status', 'final_media'] })
    console.log(prova)
    // pega os exercicios da prova
    const exerciciosProva = await Exercises.findAll({ where: { examId, userId }, attributes: ['question'] })
    console.log(exerciciosProva)

    // pegar as questoes da prova e manda para serem corrigidas
    const correcao = await enviarRespostaExercicio({ exerciciosProva, response })

    //  calcular a media
    const { questoesCertas, totalQuestoes, media } = calcularMediaProva(prova.feat, exerciciosProva);
    // Atualizar a prova no banco de dados
    await Exam.update(
        {
            final_media: media,
            status: "Completa"
        },
        { where: { id: examId } }
    );

    return correcao
}

