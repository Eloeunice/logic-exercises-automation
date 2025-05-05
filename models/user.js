import { DataTypes, Sequelize } from "sequelize"
import { sequelize } from "../config/dbConnect.js"
import { z } from "zod"

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING(10), allowNull: false }
})

export default User


export const userSchema = z.object({
    username: z.string().min(5, { message: "Precisa ter no mínimo 5 caracteres" }),
    email: z.string().email({ message: "Email inválido" }),
    password: z.string(10).max(10, { message: "Ao máximo 10 caracteres" })
})


export const userLogin = z.object({
    username: z.string().min(5, { message: "Precisa ter no mínimo 5 caracteres" }),
    password: z.string(10).max(10, { message: "Ao máximo 10 caracteres" })
})

export const changePasswordSchema = z.object({
    email: z.string().email(),
    newPassword: z.string(10).max(10, { message: "Ao máximo 10 caracteres" })
})

//Cria a tabela 
/*export async function syncUser() {
    await User.sync({ alter: true })
    console.log('Tabela User criada')
}
*/