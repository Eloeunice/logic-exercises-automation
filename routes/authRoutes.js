import { Router } from "express"
import { registerUser, loginUser, changePassword } from "../controllers/userController.js"
import { validateChangePassword, validateLogin, validateRegister } from "../middlewares/validationMiddleware.js"

const authRoutes = Router()

authRoutes.get('/register', (req, res) => res.status(200).send('Voce esta na rota de registro'))
authRoutes.get('/login', (req, res) => res.status(200).send('Voce esta na rota de login'))
authRoutes.post('/register', validateRegister, registerUser)
authRoutes.post('/login', validateLogin, loginUser)
authRoutes.post('/change-password', validateChangePassword, changePassword)

export default authRoutes