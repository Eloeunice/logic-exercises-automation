import dotenv from "dotenv"
import axios from "axios"

dotenv.config()


// Essa funcao que comeca o processo e eu quero que ela rode no horario que eu disser
export async function enviarMensagemTelegram(mensagem) {
    //  O BOT ENVIA UMA MENSAGEM PRIMEIRO PERGUNTANDO QUAL O NIVEL QUE A PESSOA QUER
    // a mensagem do bot precisa ser enviada ao telegram através dessa URL
    const TELEGRAM_URL = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`
    try {
        const mensagemASerEnviada = axios.post(TELEGRAM_URL, {
            chat_id: process.env.CHAT_ID,
            text: message
        })
        console.log("✅ Mensagem enviada com sucesso:", mensagemASerEnviada)

    } catch (error) {
        console.log(error)
    }

}

