const db = require('../db');

exports.getAll = (req, res) => {
  db.query('SELECT * FROM funcionarios', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.getById = (req, res) => {
  db.query('SELECT * FROM funcionarios WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).send({ msg: 'Funcionário não encontrado' });
    res.json(results[0]);
  });
};

exports.create = (req, res) => {
  const { nome, cargo, salario } = req.body;
  db.query('INSERT INTO funcionarios (nome, cargo, salario) VALUES (?, ?, ?)', [nome, cargo, salario], (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(201).send({ id: results.insertId, nome, cargo, salario });
  });
};

exports.update = (req, res) => {
  const { nome, cargo, salario } = req.body;
  db.query('UPDATE funcionarios SET nome = ?, cargo = ?, salario = ? WHERE id = ?', [nome, cargo, salario, req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ msg: 'Funcionário atualizado com sucesso' });
  });
};

exports.remove = (req, res) => {
  db.query('DELETE FROM funcionarios WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send({ msg: 'Funcionário removido com sucesso' });
  });
};
