const express = require("express")
const router = express.Router()

// Rota para a página inicial do aplicativo
router.get('/', (req, res) => {
    return res.status(200).send("Este é o app do grupo 02")
})

module.exports = { router }