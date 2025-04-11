import { Router } from "express"
import { pedirNovoExercicio, listarExercicios } from "../controllers/exerciseController.js"

const exerciseRoutes = Router()

exerciseRoutes.get('/', listarExercicios)
exerciseRoutes.post('/', pedirNovoExercicio)

export default exerciseRoutes