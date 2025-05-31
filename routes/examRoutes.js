import { Router } from "express"
import { listarProvas, gerarProvas, responderProvas } from "../controllers/examController.js"



const examRoutes = Router()

examRoutes.get('/', listarProvas)
examRoutes.post('/', gerarProvas)
examRoutes.post('/responder', responderProvas)


export default examRoutes