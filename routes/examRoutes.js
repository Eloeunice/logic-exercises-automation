import { Router } from "express"
import { listarProvas, gerarProvas, responderProvas } from "../controllers/examController.js"
import { validateExam } from "../middlewares/validationMiddleware.js"


const examRoutes = Router()

examRoutes.get('/', listarProvas)
examRoutes.post('/', validateExam, gerarProvas)
examRoutes.post('/responder', responderProvas)


export default examRoutes