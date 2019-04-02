var connection = require("./db.js");

/**
 * Retrieve courses that the student is enrolled in from the DB.
 */
const retrieveCourses_ofStudent  = async function(user_id) {
    return connection.task('retrieveCourses_ofStudent ', function *(t) {
          const courses= yield t.any('Select courses.course_id, name, shortName From courses, enrolled where  student_id = $1 and courses.course_id = enrolled.course_id', [user_id]);
          return yield courses;
      });
  }

  retrieveCourses_ofStudent(1)
  .then(courses => {
      console.log(courses);
  })
  .catch(error =>{
      console.log("error");
  });

module.exports = {
    retrieveCourses_ofStudent,
  }
