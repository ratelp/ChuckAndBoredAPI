/**
 * Módulo de rotas para buscar piadas da API do Chuck Norris.
 */
const express = require('express');
const router = express.Router();
const JokeController = require('../controllers/JokeController');

/**
 * Busca uma piada aleatória da API do Chuck Norris e retorna detalhes formatados.
 * @path {GET} api/piadas
 */

const jokeController = new JokeController();

router.get('/piadas', async (req, res) => {
    try {
        const joke = await jokeController.getJoke();
        res.status(200).send(joke);
    } catch (err) {
        console.error("Erro ao buscar piada", err);
        res.status(500).send("Erro ao buscar piada");
    }
});

module.exports = { router };
