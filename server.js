import express from "express"
import dotenv from "dotenv"
import conectaNoDatabase from "./config/dbConnect.js"
import routes from "./routes/routes.js"
import swaggerUI from "swagger-ui-express"
import fs from "fs/promises";

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

// CONEXÃO COM A PORTA

app.listen(PORT, () => console.log(`Servidor ouvindo na porta ${PORT}`))


