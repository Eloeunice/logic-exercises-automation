import passport from "passport"
import { Strategy, ExtractJwt } from "passport-jwt"
import User from "../models/user.js"
import dotenv from "dotenv"

dotenv.config()

// recebe a forma de extracao do token e a chave
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

// definindo a estrategia vai de autenticacao do usuario com ppassport
passport.use(new Strategy(options, async (jwt_payload, done) => {
    try {
        const user = await User.findOne({ where: { id: jwt_payload.id } })
        // encontra o usuario na base e retorna
        if (user) {
            return done(null, user)
        } else {
            return done(null, false)
        }   // chama done() com um erro se o user nao existe]
    } catch (error) {
        return done(error, false)
    }

}))

// middleware que vai verificar o token
export const verifyToken = passport.authenticate("jwt", { session: false })
