const express = require('express');
const router = express.Router();
const controller = require('../controllers/funcionariosController');

/**
 * @swagger
 * tags:
 *   name: Funcionários
 *   description: Gerenciamento de funcionários
 */

/**
 * @swagger
 * /funcionarios:
 *   get:
 *     summary: Lista todos os funcionários
 *     tags: [Funcionários]
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /funcionarios/{id}:
 *   get:
 *     summary: Obtém um funcionário pelo ID
 *     tags: [Funcionários]
 */
router.get('/:id', controller.getById);

/**
 * @swagger
 * /funcionarios:
 *   post:
 *     summary: Cadastra um novo funcionário
 *     tags: [Funcionários]
 */
router.post('/', controller.create);

/**
 * @swagger
 * /funcionarios/{id}:
 *   put:
 *     summary: Atualiza um funcionário
 *     tags: [Funcionários]
 */
router.put('/:id', controller.update);

/**
 * @swagger
 * /funcionarios/{id}:
 *   delete:
 *     summary: Remove um funcionário
 *     tags: [Funcionários]
 */
router.delete('/:id', controller.remove);

module.exports = router;
