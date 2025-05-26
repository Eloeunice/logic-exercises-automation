// Armazena todas as rotas da aplicação
import { Router } from "express"
import exerciseRoutes from "./exerciseRoutes.js"
import authRoutes from "./authRoutes.js"
import answerRoutes from "./answerRoutes.js"
import examRoutes from "./examRoutes.js"
import dashboardRoutes from "./dashboardRoutes.js"
import { verifyToken } from "../middlewares/passport.js"
// import { telegramWebhook } from "../controllers/telegramController.js"


const routes = Router()

routes.use('/', authRoutes)
routes.use('/exercicios', verifyToken, exerciseRoutes) // rota, middleware, controller
routes.use('/respostas', verifyToken, answerRoutes)
routes.use('/provas', verifyToken, examRoutes)
routes.use('/metricas', verifyToken, dashboardRoutes)

// routes.post('/webhook', telegramWebhook)

export default routes
