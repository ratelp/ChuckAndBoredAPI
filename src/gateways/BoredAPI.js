const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const BORED_API_URL = process.env.BORED_API_URL;

class BoredAPI {
    async getActivity() {
        try {
            const response = await axios.get(BORED_API_URL);
            const activityData  = response.data;

            return ({
                id: uuidv4(), // Gera um ID único. 
                atividade: activityData.activity,
                tipo: activityData.type,
                participantes: activityData.participants,
                acessibilidade: (activityData.accessibility)*100 + "%"
            });
        } catch (error) {
            console.error("Erro ao buscar atividade", error);
            throw new Error("Erro ao buscar atividade");
        }
    }
}

module.exports = BoredAPI;