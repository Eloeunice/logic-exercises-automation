# 🤖 Logic Exercises Automation

Um bot para envio diário de exercícios de lógica de programação via Telegram, usando OpenAI e MongoDB. Ideal para quem quer praticar programação todos os dias de forma simples e automatizada.

## 🚀 Funcionalidades

- Gera exercícios de lógica de programação usando a API da OpenAI (ChatGPT)
- Armazena os exercícios no MongoDB com status "pendente"
- Envia o exercício para o usuário via Telegram
- Atualiza o status do exercício para "enviado" após o envio
- Webhook ativado com o comando `/start` no Telegram

## 🛠️ Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [OpenAI API](https://platform.openai.com/)
- [Telegram Bot API](https://core.telegram.org/bots/api)
- [ngrok](https://ngrok.com/) (para expor o servidor local)

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Eloeunice/logic-exercises-automation.git
cd logic-exercises-automation
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` e adicione suas chaves:

```env
OPENAI_API_KEY=your_openai_api_key
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
MONGO_URI=your_mongo_connection_uri
PORT=3000
```

4. Inicie o servidor:

```bash
node index.js
```

5. Inicie o ngrok (ou configure o webhook direto se for deployar):

```bash
ngrok http 3000
```

6. Copie o endereço gerado pelo ngrok e configure o webhook do bot:

```bash
https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/setWebhook?url=https://seu-endereco-ngrok/webhook
```

## 📚 Estrutura do projeto

```
logic-exercises-automation/
│
├── src/
│   ├── bot/                  # Lógica do bot do Telegram
│   ├── services/             # Comunicação com a OpenAI
│   ├── controllers/          # Lógica de envio e salvamento
│   ├── models/               # Schema do exercício
│   └── routes/               # Rotas do Express
│
├── .env                     # Variáveis de ambiente
├── index.js                 # Arquivo principal do servidor
└── README.md                # Este arquivo :)
```

## 📈 Roadmap futuro

- Adicionar suporte a respostas dos usuários
- Registrar tempo de resposta e feedback
- Dashboard com progresso
