var connection = require("./db.js");

/**
 * Retrieve grades assigned for the course and student
 */

const retrieveGrades  =  function(user_id, course_id) {
    return connection.task('retrieveGrades ', function *(t) {
          const grades = t.any('select assignments.assignment_id, assignments.title, course_assignment_types.type, grade from submitted_assignments, assignments, course_assignment_types where grade is not null and student_id = $1 and submitted_assignments.assignment_id = assignments.assignment_id and submitted_assignments.assignment_id IN (select course_assignments.assignment_id from course_assignments where course_id = $2) and assignments.type = course_assignment_types.type_id and course_assignment_types.course_id = $2;', [user_id, course_id]);
          return grades;
      });
  }


module.exports = {
    retrieveGrades,
}