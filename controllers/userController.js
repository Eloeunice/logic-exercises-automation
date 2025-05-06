import User from "../models/user.js"
import dotenv from "dotenv"
import { loginUserUseCase } from "../use-Cases/LoginUserUseCase.js"
import { createUser } from "../use-Cases/CreateUserUseCase.js"
import { changePasswordUseCase } from "../use-Cases/ChangePasswordUseCase.js"

dotenv.config()


export async function registerUser(req, res) {
    try {
        // passamos aqui o que vai ser usado na funcao do use-case
        const novoUser = await createUser(req.body, User)
        return res.status(201).send({ message: "Usuário criado com sucesso", novoUser })

    } catch (error) {
        res.status(400).send(error.message)
        console.log(error)
    }
}

export async function loginUser(req, res) {
    try {
        // usuario envia username e password
        const { token } = await loginUserUseCase(req.body, User)
        console.log({ token })
        res.status(200).send({ token })

    } catch (error) {
        res.status(401).send({ error: error.message })
        console.log(error)

    }

}

export async function changePassword(req, res) {
    try {
        const novaSenha = await changePasswordUseCase(req.body, User)
        // o usuario envia o email dele, caso o email exista, ele pode dar um update no password
        res.send("Senha atualizada com sucesso!", novaSenha);

    } catch (error) {
        console.error("Erro ao alterar a senha:", error);
        res.status(400).send({ error: error.message })
    }

}