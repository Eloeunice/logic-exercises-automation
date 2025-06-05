import { getCompletedExamsUseCase } from "../use-Cases/getCompletedExamsUseCase.js"
import { getPercentageHitsUseCase } from "../use-Cases/getPercentageHitsUseCase.js"
import { getPercentageErrorsUseCase } from "../use-Cases/getPercentageErrorsUseCase.js"
import { getEvolutionUseCase } from "../use-Cases/getEvolutionUseCase.js"

export async function getCompletedExams(req, res) {
    try {
        const userId = req.user.id // o passport através do verify token, ja decodifica o token
        const completedExams = await getCompletedExamsUseCase(userId)
        console.log("Provas Completas", completedExams)
        return res.status(200).json(completedExams)

    } catch (error) {
        console.error("Erro ao consultar provas completas: ", error)
        res.status(500).send({ message: "Erro ao consultar provas completas" })

    }
}

export async function getPercentageHits(req, res) {
    try {
        const userId = req.user.id
        const percentageHits = await getPercentageHitsUseCase(userId)
        return res.status(200).json(`Essa é a sua porcentagem total de acertos: ${percentageHits}%`)


    } catch (error) {
        console.error("Erro ao calcular porcentagem total de acertos", error)
        res.status(500).send({ message: "Erro ao calcular porcentagem de acertos" })
    }

}


export async function getPercentageErrors(req, res) {
    try {
        const userId = req.user.id
        const percentageErrors = await getPercentageErrorsUseCase(userId)
        return res.status(200).json(`Essa é a sua porcentagem total de erros: ${percentageErrors}%`)

    } catch (error) {
        console.error("Erro ao calcular porcentagem total de erros", error)
        res.status(500).send({ message: "Erro ao calcular porcentagem de erros" })
    }
}

// export async function getSeenContents(req, res) {
//     try {
//         const userId = req.user.id
//         const seenContents = await getSeenContentsUseCase(userId)
//         return res.status(200).json(seenContents)


//     } catch (error) {
//         console.error("Erro ao consultar conteúdos vistos", error)
//         res.status(500).send({ message: "Erro ao consultar conteúdos vistos" })
//     }
// }

export async function getEvolution(req, res) {
    try {
        const userId = req.user.id
        const inicio = req.query.inicio
        const fim = req.query.fim
        const evolution = await getEvolutionUseCase(inicio, fim, userId)
        if (evolution.length === 0) {
            res.json({ message: "Sem dados suficientes para essas datas", data: [] })
            return res.status(200).json(evolution)
        }
    } catch (error) {
        console.error("Erro ao pegar dados de evolucao", error)
        res.status(500).send({ message: "Erro ao pegar dados de evolução" })
    }
}
