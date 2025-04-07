import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

async function conectaNoDatabase() {
    await mongoose.connect(process.env.STRING_DB_CONNECTION, { dbName: "automation-exercises" })
    return console.log("Conexão bem sucedida com o banco de dados")

}

export default conectaNoDatabase