import express, { Router } from "express"
import { registerUser } from "../controllers/userController.js"

const authRoutes = Router()

authRoutes.get('/', (req, res) => res.status(200).send('Voce esta na rota de registro'))
authRoutes.post('/', registerUser)


export default authRoutes