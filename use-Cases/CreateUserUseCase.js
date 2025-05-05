import User from "../models/user.js"

export async function createUser({ email, username, password }, userModel) {
    // receber email, username e password pela requisicao
    const userExists = await User.findOne({ where: { email } })
    if (userExists) {
        throw new Error("Já existe um usuário com esse email")
    }
    // case de tudo certo ele vai para o useCase para criar o usuario
    const newUser = await User.create({ email, username, password })
    return newUser
}