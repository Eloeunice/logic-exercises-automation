import Router from "express"
import {
    getCompletedExams,
    getPercentageHits,
    getPercentageErrors,
    getSeenContents,
    getEvolution
} from "../controllers/dashboardController.js";

const dashboardRoutes = Router()

dashboardRoutes.get('/provas/completas', getCompletedExams) // provas completas
dashboardRoutes.get('/acertos/percentual', getPercentageHits) // porcentagem total de acerto
dashboardRoutes.get('/erros/percentual', getPercentageErrors) // porcentagem total de erro
dashboardRoutes.get('/conteudos/vistos', getSeenContents) // conteudos vistos
dashboardRoutes.get('/evolucao', getEvolution) // evolucao de acertos por data (inicio=2024-05-01&fim=2024-05-24) req.query

export default dashboardRoutes