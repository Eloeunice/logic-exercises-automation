import Answer from "../models/answer.js"
import { enviarRespostaExercicio } from "../use-Cases/SendAnswerUseCase.js"
import jwt from "jsonwebtoken"

// enviar as respostas dos exercicios passando o id

export async function enviarResposta(req, res) {
    try {
        const token = req.header('Authorization').replace('Bearer ', ''); // Extrair o token do header
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verificar o token (usar uma chave secreta)
        req.userId = decoded.id; // Salva o ID do usuário na requisição

        const resposta = await enviarRespostaExercicio(req.body, req.userId)
        console.log(resposta)

        res.status(200).send(resposta)

    } catch (error) {
        res.status(400).send({
            message: "Erro ao enviar a resposta",
            error: error.message
        })
    }

}