var connection = require("./db.js");

/**
 * Retrieve a user from the DB.
 */
const retrieveUser = async function(email, password) {
  //Use connection after the db is set up to retreive user information from the DB.
  //connection.query('SELECT user_id, name FROM users WHERE  email = $1 and password = crypt($2, password)', [email,password], (error, results) => {
  return connection.task('retrieveUser', function *(t) {
        const user = yield t.one('SELECT user_id, name FROM users WHERE  email = $1 and password = $2', [email,password]);
        return yield user;
    });
    /*
      var result = 5;
        try {
            const users = await connection.one('SELECT user_id, name FROM users WHERE  email = $1 and password = $2', [email,password]);
            result = users.rows
        }
        catch(e) {
            throw e;
        }
        console.log("Query " + result);
        return result;
    */
}
retrieveUser('blake','password')
    .then(user => {
        console.log(user);
    })
    .catch(error =>{
        console.log("error");
    });




/**
 * insert user into the DB.
 */
const createUser = function(connection, user_id, name, password, email){
  connection.query('INSERT INTO users (user_id, name, password, email) VALUES ($1, $2, $3, $4)', [user_id, name, password, email], (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows)
    return results.rows.length
});
}


module.exports = {
    retrieveUser,
    createUser
  }
