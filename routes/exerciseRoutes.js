import { Router } from "express"
import { listarExercicios, pedirExercicio } from "../controllers/exerciseController.js"

const exerciseRoutes = Router()

exerciseRoutes.get('/', listarExercicios)
exerciseRoutes.post('/', pedirExercicio)

export default exerciseRoutes