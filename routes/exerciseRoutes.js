import { Router } from "express"
import { listarExercicios } from "../controllers/exerciseController.js"

const exerciseRoutes = Router()

exerciseRoutes.get('/', listarExercicios)

export default exerciseRoutes