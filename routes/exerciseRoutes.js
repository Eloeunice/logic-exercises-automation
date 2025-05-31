import { Router } from "express"
import { listarExercicios, pedirExercicio } from "../controllers/exerciseController.js"
import { validateExercise } from "../middlewares/validationMiddleware.js"

const exerciseRoutes = Router()

exerciseRoutes.get('/', listarExercicios)
exerciseRoutes.post('/', validateExercise, pedirExercicio)

export default exerciseRoutes