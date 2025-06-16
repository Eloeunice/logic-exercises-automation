import { z } from "zod";

const options = ['iniciante', 'intermediario', 'avancado'];

export const createExerciseSchema = z.object({
    question: z.string().min(1, { message: "A questão não pode estar vazia" }),
    difficulty: z.string()
        .transform((val) => val.toLowerCase())
        .refine((value) => options.includes(value), {
            message: "A dificuldade precisa ser: iniciante, intermediario ou avancado",
        }),
    status: z.string().optional(),
    examId: z.number().optional(),
    userId: z.number().optional()
});
