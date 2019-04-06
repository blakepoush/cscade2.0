var connection = require("./db.js");

/**
 * Retrieve all courses notes from the DB.
 */
const retrieveCourses_notes  = async function(course_id) {
    return connection.task('retrieveCourses_notes ', function *(t) {
          const notes= yield t.any('select * from  notes where note_id IN (select note_id from course_notes where course_id = $1)', [course_id]);
          return yield notes;
      });
  }

  retrieveCourses_notes(4143)
  .then(notes=> {
      console.log(notes);
  })
  .catch(error =>{
      console.log("error");
  });

module.exports = {
    retrieveCourses_notes,
  }