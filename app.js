const express = require('express');
const app = express();
const path = require('path');
const funcionariosRoutes = require('./routes/employees');
const { swaggerUi, specs } = require('./swagger/swagger');

app.use(express.json());
app.use('/funcionarios', funcionariosRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Serve os arquivos estáticos do frontend:
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
