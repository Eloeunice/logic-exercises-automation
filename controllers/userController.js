import { userSchema } from "../middlewares/validationMiddleware.js"
import User from "../models/user.js"

export async function registerUser(req, res) {
    try {
        // receber email, username e password pela requisicao
        const { email, username, password } = req.body
        // os dados vao para o zod para serem validados
        const validateData = userSchema.parse({ email, username, password })

        // case de tudo certo ele vai para o useCase para criar o usuario
        const newUser = await User.create(validateData)
        console.log(newUser)
    } catch (error) {
        res.status(500).send('Erro aqui')
        console.log(error)
    }
}