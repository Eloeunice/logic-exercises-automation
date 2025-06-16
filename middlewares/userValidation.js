import { z } from "zod";

export const userSchema = z.object({
    username: z.string().min(5, { message: "Precisa ter no mínimo 5 caracteres" }),
    email: z.string().email({ message: "Email inválido" }),
    password: z.string().max(10, { message: "Máximo de 10 caracteres" })
});

export const userLoginSchema = z.object({
    username: z.string().min(5, { message: "Precisa ter no mínimo 5 caracteres" }),
    password: z.string().max(10, { message: "Máximo de 10 caracteres" })
});

export const changePasswordSchema = z.object({
    email: z.string().email(),
    newPassword: z.string().max(10, { message: "Máximo de 10 caracteres" })
});
