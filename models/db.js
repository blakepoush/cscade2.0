/**
 * File where connection to psql database is establised.
 */


/*var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'mydb'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;*/

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'root',   
  host: 'localhost',
  database: 'mydb',  
  password: 'password',   
  port: 5432,
})

module.exports = pool;