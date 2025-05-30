import { Op, fn, col, literal } from "sequelize";
import { Answer, Feedback } from "../models/index.js";

export async function getEvolutionUseCase(inicio, fim, id) {
    // procurar no banco a quantidade de acertos de acordo com a data

    const acertosComDatas = await Answer.findAll({
        attributes: [
            [fn('DATE_TRUNC', 'day', col('answer.createdAt')), 'data'], // trunca por data
            [fn('COUNT', col('answer.id')), 'acertos'] // conta o numero de acertos
        ],
        where: {
            userId: id,
            createdAt: { [Op.between]: [inicio, fim] }
        },
        include: [{
            model: Feedback,
            attributes: [],
            where: { is_correct: true }
        }],
        group: [fn('DATE_TRUNC', 'day', col('answer.createdAt'))],
        order: [[fn('DATE_TRUNC', 'day', col('answer.createdAt')), 'ASC']]
    })
    // lista os acertos por data
    // vai pegar o numero de acertos naquela data e mostrar
    const evolution = acertosComDatas.map(item => ({
        data: item.get('data'),
        acertos: item.get('acertos')
    }))

    return evolution

}