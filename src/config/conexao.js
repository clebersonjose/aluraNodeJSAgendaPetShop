import mysql from 'mysql';

const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'cleber',
  password: 'senha',
  database: 'db'
})

export default conexao;