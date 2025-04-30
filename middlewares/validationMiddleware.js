import { z } from "zod"

export const userSchema = z.object({
    username: z.string().min(5, { message: "Precisa ter no mínimo 5 caracteres" }),
    email: z.string().email({ message: "Email inválido" }),
    password: z.string(10).max(10, { message: "Ao máximo 10 caracteres" })
})