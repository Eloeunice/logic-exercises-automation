import { Router } from "express"
import { listarProvas, gerarProvas } from "../controllers/examController.js"



const examRoutes = Router()

examRoutes.get('/', listarProvas)
examRoutes.post('/', gerarProvas)

export default examRoutes