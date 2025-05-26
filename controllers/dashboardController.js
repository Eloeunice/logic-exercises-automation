import { getCompletedExamsUseCase } from "../use-Cases/getCompletedExamsUseCase.js"


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

}


export async function getPercentageErrors(req, res) {

}

export async function getSeenContents(req, res) {

}

export async function getEvolution(req, res) {

}