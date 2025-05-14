import { Router } from "express"
import { pedirExercicio } from "../controllers/exerciseController.js"
import { validateExercise } from "../middlewares/validationMiddleware.js"

const exerciseRoutes = Router()

exerciseRoutes.get('/', (req, res) => res.status(200).send('Voce esta na rota de exercicios'))
exerciseRoutes.post('/', validateExercise, pedirExercicio)

export default exerciseRoutes