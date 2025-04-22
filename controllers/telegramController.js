import Exercicio from "../models/Exercise.js"
import { gerarExercicio } from "../services/openaiService.js"
import dotenv from "dotenv"
import axios from "axios"
dotenv.config()

// WEBHOOK AVISA QUE UMA MENSAGEM FOI RECEBIDA

export async function telegramWebhook(req, res) {
    console.log("🔥 Webhook disparado!")

    const mensagem = req.body.message?.text // PEGO A MENSAGEM DO TEXTO DIZENDO A DIFICULDADE
    const chatID = req.body.message?.chat.id

    console.log("Mensagem Recebida: ", mensagem);
    console.log("Chat ID: ", chatID)

    if (!mensagem || !chatID) {
        return res.sendStatus(200); // Ignora mensagens que não são texto
    }


    if (mensagem.toLowerCase() === "/start") {
        await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
            chat_id: chatID,
            text: "Olá, vamos para mais um exercício? Me diz qual o nível que você deseja praticar hoje -> Fácil, Médio ou Difícil?"
        });
        return res.sendStatus(200)
    }

    const mensagemFinal = mensagem.toLowerCase()
    const niveisValidos = ['fácil', 'facil', 'médio', 'medio', 'difícil', 'dificil']
    const nivelEscolhido = niveisValidos.find((nivel) => mensagemFinal.includes(nivel)) // percorre o array de nivel e procura se algum dos elementos corresponde a mensagem enviada

    if (!nivelEscolhido) {
        await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
            chat_id: chatID,
            text: "Digite um nível válido por favor"
        });
        return res.sendStatus(200)
    }

    try {
        // CHAMO A GERAR EXERCICIO PASSANDO A DIFICULDADE (QUE É O TEXTO DÁ MENSAGEM)
        const novoExercicio = await gerarExercicio(mensagem)
        const exercicioSalvo = await Exercicio.create(novoExercicio)

        // O EXERCICIO É ENVIADO PARA O USUARIO ATRAVÉS DO TELEGRAM
        await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
            chat_id: chatID,
            text: exercicioSalvo.Pergunta

        })
        return res.sendStatus(200)

    } catch (error) {
        console.log(error)
        return res.status(500).send("Erro ao processar a mensagem")
    }

}
