var connection = require("./db.js");

/**
 * Retrieve courses that the student is enrolled in from the DB.
 */
const retrieveCourses_ofStudent  = async function(user_id) {
    return connection.task('retrieveCourses_ofStudent ', function (t) {
        const courses =  t.any('select * from courses where course_id IN (select course_id from enrolled where student_id = $1)', [user_id]);
        return courses;
    });
  }

module.exports = {
    retrieveCourses_ofStudent,
  }

