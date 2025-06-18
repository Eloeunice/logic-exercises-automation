
# 🤖 Logic Exercises System

Sistema de envio e correção de exercícios de lógica, pensado para quem quer praticar programação todos os dias de forma simples e automatizada.

O projeto pode ser usado de duas formas:

- ✅ Como **bot no Telegram**, enviando exercícios via chat  
- ✅ Como **API REST**, permitindo integrações e controle dos dados via HTTP

---

## 🚀 Funcionalidades principais

- Geração de exercícios de lógica usando a **API da OpenAI (ChatGPT)**
- Armazenamento de exercícios e respostas
- Envio automático de exercícios para o usuário
- Correção de respostas com feedback personalizado
- Geração de provas por nível de dificuldade
- Dashboard com evolução e métricas do usuário

---

## 🛠️ Tecnologias utilizadas

- **Node.js & Express.js** — Backend e API  
- **Sequelize** — ORM para PostgreSQL  
- **PostgreSQL** — Banco de dados relacional  
- **Zod** — Validação de dados  
- **OpenAI API** — Geração de conteúdo inteligente  
- **Telegram Bot API** — Envio de mensagens via chat  
- **Passport.js + JWT** — Autenticação de usuários  
- **Swagger (OpenAPI)** — Documentação da API  
- **ngrok** — Exposição local para Webhooks durante desenvolvimento  

---

## 📦 Instalação local (Dev)

### 1. Clonar o repositório

```bash
git clone https://github.com/Eloeunice/logic-exercises-automation.git
cd logic-exercises-automation
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Criar o arquivo `.env`

Exemplo de conteúdo:

```dotenv
API_OPENAI_KEY=your_openai_api_key
BOT_TOKEN=your_telegram_bot_token
CHAT_ID=your_telegram_chat_id
JWT_SECRET=your_jwt_secret
DB_NAME=logic_db
DB_USER=postgres
DB_PASS=mysecretpassword
DB_HOST=localhost
DB_PORT=5432
```

---

## 🐘 Rodando o PostgreSQL com Docker

Caso não tenha um PostgreSQL instalado localmente, use o Docker:

### Subir o banco de dados:

```bash
docker run --name logic-postgres \
-e POSTGRES_PASSWORD=mysecretpassword \
-e POSTGRES_DB=logic_db \
-p 5432:5432 \
-d postgres
```

### Subir o Adminer (opcional):

```bash
docker run --name logic-adminer \
--link logic-postgres:db \
-p 8080:8080 \
-d adminer
```

Acesse: [http://localhost:8080](http://localhost:8080)

---

## 🗃️ Configurando o banco de dados (Migrations)

### Inicializar Sequelize CLI (se ainda não fez)

```bash
npx sequelize-cli init
```

### Rodar as migrations

```bash
npx sequelize-cli db:migrate
```

### Popular com dados iniciais (Opcional)

```bash
npx sequelize-cli db:seed:all
```

### Desfazer todas as migrations (se precisar):

```bash
npx sequelize-cli db:migrate:undo:all
```

---

## 🚀 Rodando o projeto

### Ambiente de desenvolvimento:

```bash
npm run dev
```

### Ambiente de produção (Exemplo simples):

```bash
npm start
```

---

## ✨ Endpoints principais da API

| Método | Rota                    | Descrição                      |
|--------|-------------------------|--------------------------------|
| POST   | `/api/login`            | Login do usuário              |
| POST   | `/api/register`         | Registro de usuário novo      |
| PUT    | `/api/change-password`  | Alteração de senha            |
| GET    | `/api/exercicios`       | Listagem de exercícios        |
| POST   | `/api/respostas`        | Envio de respostas            |
| GET    | `/api/provas`           | Geração de provas             |
| GET    | `/api/metricas`         | Métricas de desempenho        |

**Obs:** Todas as rotas completas (incluindo métodos corretos) estão documentadas no Swagger.

---

## 📚 Estrutura de Pastas

```
logic-exercises-automation/
│
├── config/          # Configurações do banco, JWT, etc
├── controllers/     # Lógicas das rotas
├── middlewares/     # Autenticação, validações, etc
├── models/          # Models Sequelize
├── migrations/      # Migrations do banco
├── seeders/         # Seeders para popular dados
├── routes/          # Definições de rotas da API
├── services/        # Integrações externas e regras específicas
├── use-cases/       # Casos de uso / Regras de negócio
│
├── .env             # Variáveis de ambiente
├── package.json     # Scripts e dependências
├── swagger.json     # Documentação da API
└── server.js        # Entry point da aplicação
```

---

## ✅ Próximos passos possíveis

- Criar mais seeders para popular exercícios iniciais
- Configurar testes unitários com Jest ou Vitest
- Criar um pipeline CI/CD para deploy automatizado
