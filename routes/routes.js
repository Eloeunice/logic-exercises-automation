// Armazena todas as rotas da aplicação
import { Router } from "express"
import exerciseRoutes from "./exerciseRoutes.js"
import authRoutes from "./authRoutes.js"
import answerRoutes from "./answerRoutes.js"
import { verifyToken } from "../middlewares/passport.js"
// import { telegramWebhook } from "../controllers/telegramController.js"


const routes = Router()

routes.use('/exercicio', verifyToken, exerciseRoutes) // rota, middleware, controller
routes.use('/', authRoutes)
routes.use('/respostas', verifyToken, answerRoutes)
// routes.post('/webhook', telegramWebhook)

export default routes
