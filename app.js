const express = require('express');
const app = express();
const funcionariosRoutes = require('./routes/employees');
const { swaggerUi, specs } = require('./swagger/swagger');

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/funcionarios', funcionariosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
