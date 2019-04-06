var connection = require("./db.js");

/**
 * Retrieve all courses assignments from the DB.
 */
const retrieveCourses_assignments  = async function(course_id) {
    return connection.task('retrieveCourses_assignments ', function *(t) {
          const assignments= yield t.any('select * from assignments where assignment_id IN (select assignment_id from course_assignments where course_id = $1);', [course_id]);
          return yield assignments;
      });
  }

  retrieveCourses_assignments(4143)
  .then(assignments=> {
      console.log(assignments);
  })
  .catch(error =>{
      console.log("error");
  });

module.exports = {
    retrieveCourses_assignments,
  }