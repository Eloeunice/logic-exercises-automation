import { enviarRespostaExercicio } from "../use-Cases/SendAnswerUseCase.js"
import jwt from "jsonwebtoken"

// enviar as respostas dos exercicios passando o id

export async function enviarResposta(req, res) {
    try {
        const userId = req.user.id
        const resposta = await enviarRespostaExercicio(req.body, userId)
        console.log(resposta)

        res.status(200).send(resposta)

    } catch (error) {
        res.status(400).send({
            message: "Erro ao enviar a resposta",
            error: error.message
        })
    }

}