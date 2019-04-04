var connection = require("./db.js");

/**
 * Retrieve a user from the DB.
 */
const retrieveUser = async function(email, password) {
  //Use connection after the db is set up to retreive user information from the DB.
  //connection.query('SELECT user_id, name FROM users WHERE  email = $1 and password = crypt($2, password)', [email,password], (error, results) => {
  return connection.task('retrieveUser', function *(t) {
        const user = yield t.one('SELECT user_id, email FROM users WHERE  email = $1 and password = md5($2)', [email,password]);
        console.log("retrieveUser: " + user.row);
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
retrieveUser('blake@gmail.com','password')
    .then(user => {
        console.log(user);
    })
    .catch(error =>{
        console.log("error");
    });




/**
 * insert user into the DB.
 *
const createUser = function(connection, user_id, name, password, email){
  connection.query('INSERT INTO users (user_id, name, password, email) VALUES ($1, $2, $3, $4)', [user_id, name, password, email], (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows)
    return results.rows.length
});
}*/

const createUser = async function(user_id, name, password, email) {
    //Use connection after the db is set up to retreive user information from the DB.
    //connection.query('SELECT user_id, name FROM users WHERE  email = $1 and password = crypt($2, password)', [email,password], (error, results) => {
    return connection.task('createUser', function *(t) {
          return t.none('INSERT INTO users (user_id, name, password, email) VALUES ($1, $2, $3, $4)', [user_id,name,password,email]);
      });
  }



/**
 * Retrieve student from the DB.
 */
const retrieveStudent = async function(user_id) {
    //Use connection after the db is set up to retreive user information from the DB.
    //connection.query('SELECT user_id, name FROM users WHERE  email = $1 and password = crypt($2, password)', [email,password], (error, results) => {
    return connection.task('retrieveStudent', function *(t) {
          const student = yield t.any('Select users.user_id, name, email From users, student where  users.user_id = $1', [user_id]);
          return yield student;
      });
  }

  retrieveStudent(1)
  .then(student => {
      console.log(student[0]);
  })
  .catch(error =>{
      console.log("error");
  });

/**
 * Retrieve instructor from the DB.
 */
const retrieveInstructor = async function(user_id) {
    return connection.task('retrieveInstructor', function *(t) {
          const instructor = yield t.any('Select users.user_id, name, email From users, instructor where  users.user_id = $1', [user_id]);
          return yield instructor;
      });
  }

  retrieveInstructor(13)
  .then(instructor => {
      console.log(instructor[0]);
  })
  .catch(error =>{
      console.log("error");
  });

/**
 * Retrieve GA from the DB.
 */
const retrieveGA = async function(user_id) {
    return connection.task('retrieveGA', function *(t) {
          const GA= yield t.any('Select users.user_id, name, email From users, ga where  users.user_id = $1', [user_id]);
          return yield GA;
      });
  }

  retrieveGA(20)
  .then(ga => {
      console.log(ga[0]);
  })
  .catch(error =>{
      console.log("error");
  });

module.exports = {
    retrieveUser,
    createUser,
    retrieveStudent,
    retrieveInstructor,
    retrieveGA,
  }
