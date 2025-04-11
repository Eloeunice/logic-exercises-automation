import express from "express"
import dotenv from "dotenv"
import conectaNoDatabase from "./config/dbConnect.js"
import routes from "./routes/routes.js"

dotenv.config()
const app = express()

app.use(express.json()) // servidor processar requisições json
app.use("/", routes)

const PORT = 3000


app.get('/', (req, res) => res.send("Servidor rodando"))


// CONEXAO COM O BANCO
conectaNoDatabase().catch(err => console.error(err))

// CONEXÃO COM A PORTA

app.listen(PORT, () => console.log(`Servidor ouvindo na porta ${PORT}`))


