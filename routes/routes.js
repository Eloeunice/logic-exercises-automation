// Armazena todas as rotas da aplicação

import { Router } from "express"
import exerciseRoutes from "./exerciseRoutes.js"

const routes = Router()

routes.use('/exercicio', exerciseRoutes)

export default routes
