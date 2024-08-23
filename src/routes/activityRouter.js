/**
 * Módulo de rotas para buscar atividades da API.
 * Utiliza Express para roteamento, Axios para requisições HTTP e uuid para geração de IDs únicos.
 */
const express = require("express")
const router = express.Router();
const ActivityController = require('../controllers/ActivityController');

/**
 * Busca uma atividade aleatória da API e retorna detalhes formatados.
 * @path {GET} api/atividades
 */

const activityController = new ActivityController();

router.get('/atividades', async (req, res) => {
    try{
        const activity = await activityController.getActivity();
        res.status(200).send(activity);

    } catch(err) {
        console.error("Erro ao buscar atividade", err)
        res.status(500).send("Erro ao buscar atividade")
    }
})

module.exports = { router }