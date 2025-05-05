import { userLogin } from "../models/user.js"

/* O middleware valida os dados com Zod e só chama next() se estiver tudo certo.
 O controller já recebe os dados prontos e válidos, sem precisar se preocupar com validação. */

export async function validateLogin(req, res, next) {
    // valida o que o usuario enviou pelo controller
    try {
        req.body = userLogin.parse(req.body)
        next()

    } catch (error) {
        return res.status(400).json({
            message: "Erro de Validação",
            issues: error.errors
        })

    }
}

export async function validateRegister(req, res, next) {

}