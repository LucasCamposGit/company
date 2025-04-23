# README do Projeto de Gerenciamento de Funcionários

## Visão Geral

Este projeto é uma aplicação web para gerenciamento de funcionários, implementada com Node.js no backend e HTML/JavaScript puro com Tailwind CSS no frontend. A aplicação oferece uma interface simples para realizar operações CRUD (Criar, Ler, Atualizar, Deletar) em uma base de dados de funcionários.

## Estrutura do Projeto

```
├── app.js                    # Arquivo principal da aplicação
├── db.js                     # Configuração da conexão com o banco de dados
├── db.sql                    # Script SQL para criação do banco de dados
├── controllers/
│   └── employeesController.js # Controlador para as operações com funcionários
├── public/
│   └── index.html            # Frontend da aplicação
├── routes/
│   └── employees.js          # Rotas da API
└── swagger/
    └── swagger.js            # Configuração da documentação Swagger
```

## Requisitos

- Node.js
- MySQL
- npm

## Instalação

1. Clone o repositório:
   ```bash
   git clone [URL do repositório]
   cd genildas
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o banco de dados:
   - Certifique-se de que o MySQL esteja instalado e em execução
   - Execute o script SQL contido em `db.sql`:
     ```bash
     mysql -u root < db.sql
     ```

4. Inicie a aplicação:
   ```bash
   node app.js
   ```

5. Acesse a aplicação no navegador:
   ```
   http://localhost:3000
   ```

## Funcionalidades

### Backend

- API RESTful com endpoints para gerenciar funcionários
- Conexão com banco de dados MySQL
- Documentação da API com Swagger

### Frontend

- Interface responsiva usando Tailwind CSS
- Formulário para adicionar/editar funcionários
- Tabela para visualização de todos os funcionários
- Operações de edição e remoção de funcionários

## Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | /funcionarios | Lista todos os funcionários |
| GET | /funcionarios/:id | Obtém um funcionário pelo ID |
| POST | /funcionarios | Cadastra um novo funcionário |
| PUT | /funcionarios/:id | Atualiza um funcionário existente |
| DELETE | /funcionarios/:id | Remove um funcionário |

## Documentação da API

Uma documentação interativa da API está disponível através do Swagger:
```
http://localhost:3000/api-docs
```

## Tecnologias Utilizadas

- **Backend**: Node.js, Express.js, MySQL
- **Frontend**: HTML, JavaScript, Tailwind CSS
- **Documentação**: Swagger

## Desenvolvimento

Para desenvolver novas funcionalidades:

1. Crie ou modifique rotas em `routes/employees.js`
2. Implemente a lógica no controlador em `controllers/employeesController.js`
3. Atualize o frontend em `public/index.html` conforme necessário
4. Documente novas rotas com anotações Swagger

## Licença

Este projeto está licenciado sob a licença ISC.