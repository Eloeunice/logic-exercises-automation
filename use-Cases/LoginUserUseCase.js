import User from "../models/user.js"
import jwt from "jsonwebtoken"

export async function loginUserUseCase({ username, password }, userModel) {
    const user = await User.findOne({ where: { username } })
    // caso o usuário nao exista ele via informar o usuario
    if (!user) {
        throw new Error("Usuário inválido")
    }

    // compara as senhas
    const passwordValidated = password === user.password

    // caso a senha esteja errada ele vai informar o usuario
    if (!passwordValidated) {
        throw new Error("Senha inválidos")
    }

    // atribui o token ao usuario
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" })
    return { token }

}