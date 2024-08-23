const BoredAPI = require('../gateways/BoredAPI');

class ActivityController {
    constructor() {
        this.boredAPI = new BoredAPI();
    }

    async getActivity() {
        try {
            const activity = await this.boredAPI.getActivity();
            return activity;
        } catch (error) {
            console.error("Erro ao buscar atividade", error);
            throw new Error("Erro ao buscar atividade");
        }
    }
}

module.exports = ActivityController;