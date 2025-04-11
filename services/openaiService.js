// Arquivo responsável por toda a comunicação com a API do chatgpt
// Envio dos prompts e recebimento de respostas

import OpenAI from "openai"
import dotenv from "dotenv"

dotenv.config()

// Configuração de conexão com a Api
const openai = new OpenAI({
    apiKey: process.env.API_OPENAI_KEY
});

// Manda o prompt de acordo com o nível de dificuldade passado no controller
export async function gerarExercicio(dificuldade) {
    const prompt = `
Gere um exercício de lógica de programação com a dificuldade: ${dificuldade}.
Responda somente em JSON no seguinte formato:

{
  "Pergunta": "Descreva aqui o enunciado do exercício",
  "Dificuldade": "${dificuldade}",
  "Status": "Pendente"
}
`;

    try {
        const resposta = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
        });

        const conteudo = resposta.choices[0].message.content

        // Garantir que está vindo JSON válido
        const exercicio = JSON.parse(conteudo)
        console.log(exercicio)
        return exercicio;

    } catch (erro) {
        console.error("Erro ao chamar a OpenAI:", erro);
        throw erro;
    }
}



