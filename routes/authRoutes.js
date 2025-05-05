import express, { Router } from "express"
import { registerUser, loginUser, changePassword } from "../controllers/userController.js"
import { validateLogin } from "../middlewares/validationMiddleware.js"

const authRoutes = Router()

authRoutes.get('/register', (req, res) => res.status(200).send('Voce esta na rota de registro'))
authRoutes.get('/login', (req, res) => res.status(200).send('Voce esta na rota de login'))
authRoutes.post('/register', registerUser)
authRoutes.post('/login', validateLogin, loginUser)
authRoutes.post('/change-password', changePassword)

export default authRoutes