import express from "express"
import dotenv from "dotenv"
import conectaNoDatabase from "./config/dbConnect.js"
import routes from "./routes/routes.js"
import swaggerUI from "swagger-ui-express"
import fs from "fs/promises";
import { syncAnswer } from "./models/answer.js"
import { syncExam } from "./models/exam.js"
import { syncFeedback } from "./models/feedback.js"
import { syncExercise } from "./models/exercise.js"
import { syncUser } from "./models/user.js"

const jsonText = await fs.readFile("./swagger.json", "utf-8");
const swaggerDocument = JSON.parse(jsonText);

dotenv.config()
const app = express()

app.use(express.json()) // servidor processar requisições json
app.use("/", routes)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))


const PORT = 3000


app.get('/', (req, res) => res.send("Servidor rodando"))

// CONEXAO COM O BANCO
conectaNoDatabase()
    .catch(err => console.error(err))

Promise.all([
    syncUser(),
    syncExercise(),
    syncExam(),
    syncAnswer(),
    syncFeedback()
])
    .then(() => console.log("Tabelas sincronizadas com sucesso"))
    .catch(err => console.error("Erro ao sincronizar tabelas:", err))

// CONEXÃO COM A PORTA

app.listen(PORT, () => console.log(`Servidor ouvindo na porta ${PORT}`))


