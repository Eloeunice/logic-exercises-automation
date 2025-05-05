import User from "../models/user.js"
import jwt from "jsonwebtoken";

export async function loginUserUseCase({ username, password }, userModel) {
    const user = await User.findOne({ where: { username } })
    // caso o usuário nao exista ele via informar o usuario
    if (!user) {
        return res.status(401).send("Usuário inválido")
    }

    // compara as senhas
    const passwordValidated = password === user.password

    // caso a senha esteja errada ele vai informar o usuario
    if (!passwordValidated) {
        return res.status(401).send("Senha inválidos")
    }

    // atribui o token ao usuario
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "5m" })
    console.log({ token })// gera o token e dá para o user
    res.json({ token });

}