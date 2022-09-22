const mysql = require('mysql2');
const dbConfig = require('../config/db.config');
const conn = mysql.createConnection({
  host: dbConfig.HOST,
  user    : dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});
// const connection = conn.connect((err) =>{
//   if(err) throw err;
// });

function connquery(sqlQuery, res){
conn.query( sqlQuery, (err, results) => {
    if(err) throw err;
    res.send(results);
});
};
function connquery1(query1, data, res){
conn.query( query1, data,(err, results) => {
    if(err) throw err;
    res.send(results);
});
};

module.exports = { connquery, connquery1 };