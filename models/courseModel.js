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

/**
 * Retrieve course ID based on assignment ID.
 */
const retrieveCourseID  = async function(assignment_id) {
  return connection.task('retrieveCourseID ', function (t) {
      const course_id =  t.one('select course_id from course_assignments where assignment_id = $1', [assignment_id]);
      return course_id;
  });
}


module.exports = {
    retrieveCourses_ofStudent,
    retrieveCourseID
  }

