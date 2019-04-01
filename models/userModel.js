var connection = require("./db.js");

/**
 * Retrieve a user from the DB.
 */
const retrieveUser = function( connection, email, password) {
  //Use connection after the db is set up to retreive user information from the DB.
  connection.query('SELECT user_id, name FROM users WHERE  email = $1 and password = crypt($2, password)', [email,password], (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows)
    return results.rows
  })
}


/**
 * insert user into the DB.
 */
const createUser = function(connection, user_id, name, password, email){
  connection.query('INSERT INTO users (user_id, name, password, email) VALUES ($1, $2, $3, $4)', [user_id, name, password, email], (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows)
    return results.rows
  })
}


module.exports = {
    retrieveUser,
    createUser,
  }