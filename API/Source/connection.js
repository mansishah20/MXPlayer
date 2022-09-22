const mysql = require('mysql2');
const dbConfig = require('./config/db.config');
const conn = mysql.createConnection({
  host: dbConfig.HOST,
  user    : dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

const connection = conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected with App...');
});

module.exports = connection;