const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "empresa",
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar no banco:", err);
    return;
  }
  console.log("Conectado ao banco de dados MySQL!");
});

module.exports = connection;
