# 🤖 Logic Exercises Automation

Um bot para envio diário de exercícios de lógica de programação via Telegram, usando OpenAI e MongoDB. Ideal para quem quer praticar programação todos os dias de forma simples e automatizada.

## 🚀 Funcionalidades

- Gera exercícios de lógica de programação usando a API da OpenAI (ChatGPT)
- Armazena os exercícios no MongoDB com status "pendente"
- Envia o exercício para o usuário via Telegram
- Atualiza o status do exercício para "enviado" após o envio
- Webhook ativado com o comando `/start` no Telegram

## 🛠️ Tecnologias utilizadas

- [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/) — backend e API  
- [Sequelize](https://sequelize.org/) — ORM para PostgreSQL  
- [PostgreSQL](https://www.postgresql.org/) — banco de dados relacional  
- [Zod](https://zod.dev/) — validação de dados e schemas  
- [OpenAI API](https://platform.openai.com/) — geração inteligente de exercícios  
- [Telegram Bot API](https://core.telegram.org/bots/api) — interação via chat  
- [Passport.js](http://www.passportjs.org/) — middleware de autenticação  
- [JWT (JSON Web Token)](https://jwt.io/) — autenticação baseada em token  
- [Swagger (OpenAPI)](https://swagger.io/specification/) — documentação automática da API  
- [ngrok](https://ngrok.com/) — exposição do servidor local para webhook (desenvolvimento)  


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
DATABASE_URL=postgres://user:password@host:port/database
CHAT_ID= your_telegram_chat_id
JWT_KEY= your_jwt_key
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
## ✨ Rotas da API

| Método | Rota                 | Descrição                         |
|--------|----------------------|----------------------------------|
| GET    | `/api/exercises`     | Lista todos os exercícios         |
| POST   | `/api/exercises`     | Cria um novo exercício            |
| GET    | `/api/exercises/:id` | Detalha um exercício específico   |
| PATCH  | `/api/exercises/:id` | Atualiza um exercício específico  |
| DELETE | `/api/exercises/:id` | Remove um exercício específico    |
| POST   | `/api/auth/login`    | Login de usuário (JWT)            |
| POST   | `/api/auth/register` | Cadastro de usuário               |

## 📚 Estrutura do projeto

```
logic-exercises-automation/
│
├── config/ # Configurações gerais do projeto (banco, JWT, etc)
├── controllers/ # Controladores com lógica das rotas
├── middlewares/ # Middlewares (autenticação, validação, etc)
├── models/ # Models do Sequelize (tabelas e relacionamentos)
├── routes/ # Definição das rotas da API
├── services/ # Serviços auxiliares (ex: integração com OpenAI)
├── use-cases/ # Casos de uso / regras de negócio específicas
│
├── .env # Variáveis de ambiente
├── .gitignore # Arquivo de exclusões git
├── package.json # Dependências e scripts npm
├── package-lock.json # Lockfile das dependências
├── README.md # Documentação do projeto
└── server.js # Arquivo principal que inicia o servidor
```