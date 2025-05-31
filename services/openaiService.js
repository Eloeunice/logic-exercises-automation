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
export async function gerarExercicio(difficulty) {
    const prompt = `
Gere um exercício de lógica de programação com nível de dificuldade: ${difficulty}.
O exercício deve ser original,claro e desafiador de acordo com a dificuldade informada.
Responda somente em JSON no seguinte formato:

{
  "question": "Descreva aqui o enunciado completo do exercício de lógica",
  "difficulty": "${difficulty}",
  "status": "Pendente"
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

export async function gerarFeedback({ question, response }) {
    // enviar a resposta junto com a pergunta que o usuario esta respondendo
    const prompt = ` Corrija a resposta do exercício considerando a estrutura a ser armazenada no banco de dados.
    A resposta deve ser clara e diretamente relacionada à questão proposta.

        Pergunta: ${question}
        Resposta: ${response}
        
    Avalie os seguintes critérios:

    - "feat": nota de 1 a 10 indicando o quão próxima a resposta está da correta (sendo 10 totalmente correta).
    - "is_correct": considere **true** se o feat for alto o suficiente para considerar a resposta correta.
    - "comment": explique brevemente o que está incorreto e dê uma sugestão clara do que melhorar ou revisar. O comentário **não deve ser longo**.
    Retorne apenas em formato JSON, exatamente conforme o modelo abaixo:
    {
    "feat": { "type": "DataTypes.INTEGER" },
    "is_correct": { "type": "DataTypes.BOOLEAN" },
    "comment": { "type": "DataTypes.TEXT" }
    }`

    try {
        const resposta = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
        });

        const conteudo = resposta.choices[0].message.content

        // Garantir que está vindo JSON válido
        const feedback = JSON.parse(conteudo)
        console.log(feedback)
        return feedback;

    } catch (erro) {
        console.error("Erro ao chamar a OpenAI:", erro);
        throw erro;
    }
}


