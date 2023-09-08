const express = require('express');
const app = express();
const port = 3000; // Porta do servidor
const authMiddleware = require('./middlewares/authMiddleware');

// Middleware global
app.use(express.json()); // Para lidar com requisições JSON
app.use(authMiddleware); // Aplicando o middleware de autenticação globalmente

// Rotas
const loginRoutes = require('./routes/loginRoutes');

app.use('/login', loginRoutes);

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
