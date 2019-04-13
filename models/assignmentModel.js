var connection = require("./db.js");

/**
 * Retrieve all courses assignments from the DB.
 */
const retrieveCourses_assignments  = function(course_id) {
    return connection.task('retrieveCourses_assignments ', function *(t) {
        const assignments = t.any('select * from assignments where assignment_id IN (select assignment_id from course_assignments where course_id = $1);', [course_id]);
        return assignments;
    });
}

/**
 * Retrieve all of the users assignments.
 */
const retrieveUserAssignments = function(user_id) {
    return connection.task('retrieveUserAssignments', function(t) {
        const assignments = t.any('select * from assignments natural join course_assignments natural join enrolled natural join courses where student_id = $1;', [user_id]);
        return assignments;
    });
}

/**
 * Retrieve all of the users current assignments.
 */
const retrieveUserCurrentAssignments = function(user_id) {
    return connection.task('retrieveUserCurrentAssignments', function(t) {
        const assignments = t.any('select * from assignments natural join course_assignments natural join enrolled natural join courses where student_id = $1 and dueDate >= now()', [user_id]);
        return assignments;
    });
}


/**
 * Retrieve all of the users past assignments.
 */
const retrieveUserPastAssignments = function(user_id) {
    return connection.task('retrieveUserPastAssignments', function(t) {
        const assignments = t.any('select * from assignments natural join course_assignments natural join enrolled natural join courses where student_id = 1 and dueDate < now()', [user_id]);
        return assignments;
    });
}


module.exports = {
    retrieveCourses_assignments,
    retrieveUserAssignments,
    retrieveUserCurrentAssignments,
    retrieveUserPastAssignments
  }