import { ZodError } from "zod"
import { userLogin, userSchema, changePasswordSchema, validarUser } from "../middlewares/validationMiddleware.js"
import User from "../models/user.js"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import { loginUserUseCase } from "../use-Cases/LoginUserUseCase.js"
import { createUser } from "../use-Cases/CreateUserUseCase.js"

dotenv.config()


export async function registerUser(req, res) {
    try {
        // passamos aqui o que vai ser usado na funcao do use-case
        const novoUser = await createUser(req.body, User)
        return res.status(201).send({ message: "Usuário criado com sucesso", novoUser })

    } catch (error) {
        res.status(400).send('Houve um erro ao processar os dados. Tente novamente!')
        console.log(error)
    }
}

export async function loginUser(req, res) {
    try {
        // usuario envia username e password
        const { token } = await loginUserUseCase(req.body, User)
        return res.json({ token })

    } catch (error) {
        return res.status(401).json({ error: error.message })
    }

}

export async function changePassword(req, res) {
    try {
        // o usuario envia o email dele, caso o email exista, ele pode dar um update no password
        const { email, newPassword } = changePasswordSchema.parse(req.body);
        const user = await User.findOne({ where: { email } })
        if (!user) {
            res.send("Email nao cadastrado")
        }

        user.password = newPassword
        await user.save()

        console.log(user.password)

        res.send("Senha atualizada com sucesso!");

    } catch (error) {
        console.error("Erro ao alterar a senha:", error);
        if (error instanceof ZodError) {
            console.log("Erro de validação!")
        }
        res.status(400).send('Houve um erro ao processar os dados. Tente novamente!')
    }

}