import e, { Router } from "express"
import { pedirNovoExercicio } from "../controllers/exerciseController.js"

const exerciseRoutes = Router()

exerciseRoutes.post('/', pedirNovoExercicio)



export default exerciseRoutes