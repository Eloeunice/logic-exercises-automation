import { Router } from "express"
import { enviarResposta } from "../controllers/answerController.js"

const answerRoutes = Router()

answerRoutes.get('/', (req, res) => res.send("Você está na rota das respostas!"))
answerRoutes.post('/', enviarResposta)


export default answerRoutes