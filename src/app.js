require('dotenv').config();  // Carrega variaveis de ambiente	

const express = require('express');
const PORT = process.env.PORT || 8080; // Define a porta do servidor 

// Importa os roteadores das diferentes partes da aplicação
const { router: homeRouter } = require("./routes/homeRouter.js");	
const { router: activityRouter } = require("./routes/activityRouter.js");
const { router: jokeRouter } = require("./routes/jokeRouter.js"); 

// Cria uma instância do aplicativo Express
const app = express();

// Define as rotas utilizadas pelo aplicativo
app.use('/', homeRouter);
app.use('/api', activityRouter);
app.use('/api', jokeRouter);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});