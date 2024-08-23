const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const CHUCK_API_URL = process.env.CHUCK_NORRIS_API_URL;

class ChuckNorrisAPI {
    async getJoke() {
        try {
            const response = await axios.get(CHUCK_API_URL);
            const jokeData = response.data;

            // Formata a data no padrão DD/MM/AAAA.
            const formatDate = dataISO => new Date(dataISO).toLocaleDateString('pt-BR', { timeZone: 'UTC' }).replace(/\//g, '-');

            return ({
                data_atualizacao: formatDate(jokeData.updated_at),
                data_criacao: formatDate(jokeData.created_at),
                icone: jokeData.icon_url,
                id: uuidv4(), // Gera um ID único. 
                piada: jokeData.value.replace(/Chuck Norris/gi, 'CHUCK NORRIS'),
                referencia: jokeData.url
            });

        } catch (error) {
            console.error("Erro ao buscar piada", error);
            throw new Error("Erro ao buscar piada");
        }
    }
}

module.exports = ChuckNorrisAPI;