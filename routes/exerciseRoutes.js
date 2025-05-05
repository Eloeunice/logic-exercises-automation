import { Router } from "express"
import { listarExercicios, pedirExercicio } from "../controllers/exerciseController.js"

const exerciseRoutes = Router()

exerciseRoutes.get('/', (req, res) => res.status(200).send('Voce esta na rota de exercicios'))
exerciseRoutes.post('/', pedirExercicio)

export default exerciseRoutes