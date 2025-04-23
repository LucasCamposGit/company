const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Funcionários',
      version: '1.0.0',
      description: 'CRUD de funcionários com Node.js e MySQL'
    },
  },
  apis: ['./routes/*.js'], // local onde estão os comentários Swagger
};

const specs = swaggerJsDoc(options);

module.exports = {
  swaggerUi,
  specs
};
