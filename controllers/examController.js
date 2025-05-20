import { getExam } from "../use-Cases/getExamUseCase.js"
import jwt from "jsonwebtoken"



export async function listarProvas(req, res) {
    try {
        // pegar os parametros da req.query (caso haja)
        res.status(200).send("bao")

        // listar todas as provas de acordo com os paramteros

    } catch (error) {
        res.status(500).send({
            message: "Erro ao listar as provas",
            error: error.errors
        })
    }

}


export async function gerarProvas(req, res) {
    try {
        // pegar o token do header da requisicao
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verificar o token (usar uma chave secreta)
        console.log(decoded)
        req.userId = decoded.id; // Salva o ID do usuário na requisição

        const prova = await getExam(req.body, req.userId)
        res.status(200).send(prova)


    } catch (error) {
        res.status(500).send({
            message: "Erro ao gerar a prova",
            error: error.errors
        })
        console.log(error)
    }
}