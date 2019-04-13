/**
 * File where connection to psql database is establised.
 */

const pgp = require('pg-promise')();
const db = pgp('postgres://root:password@localhost:5432/mydb')

module.exports = db;
