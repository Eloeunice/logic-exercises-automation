// Armazena todas as rotas da aplicação
import { Router } from "express"
import exerciseRoutes from "./exerciseRoutes.js"
import { telegramWebhook } from "../controllers/telegramController.js"
import { enviarMensagemTelegram } from "../services/telegramService.js"

const routes = Router()

routes.use('/exercicio', exerciseRoutes)
routes.post('/webhook', telegramWebhook)

export default routes
