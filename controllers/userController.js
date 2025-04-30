import { ZodError } from "zod"
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
        res.status(201).send({ message: "Usuário criado com sucesso" })

    } catch (error) {
        if (error instanceof ZodError) {
            console.log("Erro de validação!")
        }
        res.status(400).send('Houve um erro ao processar os dados. Tente novamente!')
        console.log(error)
    }
}