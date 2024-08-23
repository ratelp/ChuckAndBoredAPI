const ChuckNorrisAPI = require('../gateways/ChuckNorrisAPI');

class JokeController {
    constructor() {
        this.chuckNorrisAPI = new ChuckNorrisAPI();
    }

    async getJoke() {
        try {
            const joke = await this.chuckNorrisAPI.getJoke();
            return joke;
        } catch (error) {
            console.error("Erro ao buscar piada", error);
            throw new Error("Erro ao buscar piada");
        }
    }
}

module.exports = JokeController;