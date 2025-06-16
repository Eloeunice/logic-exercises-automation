import { z } from "zod";

const options = ['iniciante', 'intermediario', 'avancado'];

export const getExamSchema = z.object({
    difficulty: z.string()
        .transform((val) => val.toLowerCase())
        .refine((value) => options.includes(value), {
            message: "Precisa ser um dos níveis: iniciante, intermediario ou avancado",
        }),
});