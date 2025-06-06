import { getExam } from "../use-Cases/getExamUseCase.js"
import { getListOfExamsUseCase } from "../use-Cases/getListOfExamsUseCase.js"
import { sendExamResponsesUseCase } from "../use-Cases/sendExamResponseUseCase.js"

export async function listarProvas(req, res) {
    try {
        const userId = req.user.id
        const provas = await getListOfExamsUseCase(userId)
        if (provas.length === 0) {
            const mensagem = "Sem provas"
            res.status(200).send(mensagem)
        }
        res.status(200).send(provas)

    } catch (error) {
        res.status(500).send({
            message: "Erro ao listar as provas",
            error: error.errors
        })
    }

}

export async function gerarProvas(req, res) {
    try {
        const userId = req.user.id
        const prova = await getExam(req.body, userId)
        res.status(200).send(prova)


    } catch (error) {
        res.status(500).send({
            message: "Erro ao gerar a prova",
            error: error.errors
        })
        console.log(error)
    }
}

export async function responderProvas(req, res) {
    try {
        const userId = req.user.id
        const respostaEnviada = await sendExamResponsesUseCase(req.body, userId)
        res.status(200).send("Respostas enviadas com succeso", respostaEnviada)

    } catch (error) {
        res.status(500).send({
            message: "Erro ao enviar respostas",
            error: error.errors
        })
        console.log(error)
    }

}

