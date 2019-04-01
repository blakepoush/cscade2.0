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

const pgp = require('pg-promise')();
const db = pgp('postgres://root:password@localhost:5432/mydb')

module.exports = db;
