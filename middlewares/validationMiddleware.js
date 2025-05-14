import { getExercise } from "../models/Exercise.js"
import { userLogin, userSchema, changePasswordSchema } from "../models/user.js"

/* O middleware valida os dados com Zod e só chama next() se estiver tudo certo.
 O controller já recebe os dados prontos e válidos, sem precisar se preocupar com validação. */

export async function validateLogin(req, res, next) {
    // valida o que o usuario enviou pelo controller
    try {
        req.body = userLogin.parse(req.body)
        next()

    } catch (error) {
        return res.status(400).send({
            message: "Erro de Validação",
            issues: error.errors
        })

    }
}

export async function validateRegister(req, res, next) {
    try {
        req.body = userSchema.parse(req.body)
        next()

    } catch (error) {
        res.status(400).json({
            message: "Erro de Validação",
            issues: error.errors
        })
    }
}

export async function validateChangePassword(req, res, next) {
    try {
        req.body = changePasswordSchema.parse(req.body)
        next()

    } catch (error) {
        res.status(400).json({
            message: "Erro de Validação",
            issues: error.errors
        })
    }
}

export async function validateExercise(req, res, next) {
    try {
        req.body = getExercise.parse(req.body)
        next()

    } catch (error) {
        res.status(400).json({
            message: "Erro de Validação",
            issues: error.errors
        })
    }

}