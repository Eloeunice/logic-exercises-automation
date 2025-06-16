# 🤖 Logic Exercises Sistem

Um sistema de exercícios de lógica, ideal para quem quer praticar programação todos os dias de forma simples e automatizada.
Há dois modos de utilização, como bot no telegram e como api para fazer requisições e ter os resultados armazenados.

## 🚀 Funcionalidades

- Gera exercícios de lógica de programação usando a API da OpenAI (ChatGPT)
- Armazena os exercícios
- Envia o exercício para o usuário
- Corrige a resposta do usuário retornando um feedback
- Gera provas de acordo com o nível de dificuldade informado
- Informa a evolução do usuário

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
API_OPENAI_KEY=your_openai_api_key
BOT_TOKEN=your_telegram_bot_token
CHAT_ID= your_telegram_chat_id
JWT_SECRET= your_jwt_key
DB_NAME=database
DB_USER=user
DB_PASS=password
DB_HOST=localhost
DB_PORT=5432```

4. Inicie o servidor:

```bash
node server.js
```

## ✨ Rotas da API

| Método | Rota                 | Descrição                         |
|--------|----------------------|----------------------------------|
| GET    | `/api/login`     | Loga o usuário        |
| GET    | `/api/register`     | Registra o usuário      |
| GET    | `/api/change-password` | Muda a senha do usuário        |
| GET   | `/api/exercicios`     | Rota de exercicios           |
| GET    | `/api/respostas` | Rota para envio de respostas |
| GET   | `/api/provas`    | Rota das provas         |
| GET   | `/api/metricas` | Rota das métricas da dashboard            |

*As demais rotas com a especificação dos métodos estão documentadas com swagger

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
├── migrations/ # Arquivos para criação do banco de dados
├── seeders/# Arquivos para popular o banco de dados
│
├── .env # Variáveis de ambiente
├── .gitignore # Arquivo de exclusões git
├── package.json # Dependências e scripts npm
├── package-lock.json # Lockfile das dependências
├── README.md # Documentação do projeto
├── swagger.json # Documentação do projeto
└── server.js # Arquivo principal que inicia o servidor
```
