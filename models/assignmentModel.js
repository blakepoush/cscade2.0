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
 * Retrieve all of the user's assignments.
 */
const retrieveUserAssignments = function(user_id) {
    return connection.task('retrieveUserAssignments', function(t) {
        const assignments = t.any('select * from assignments natural join course_assignments natural join enrolled natural join courses where student_id = $1;', [user_id]);
        return assignments;
    });
}

/**
 * Retrieve all of the user's current assignments.
 */
const retrieveUserCurrentAssignments = function(user_id) {
    return connection.task('retrieveUserCurrentAssignments', function(t) {
        const assignments = t.any('select * from assignments natural join course_assignments natural join enrolled natural join courses where student_id = $1 and dueDate >= now()', [user_id]);
        return assignments;
    });
}


/**
 * Retrieve all of the user's past assignments.
 */
const retrieveUserPastAssignments = function(user_id) {
    return connection.task('retrieveUserPastAssignments', function(t) {
        const assignments = t.any('select * from assignments natural join course_assignments natural join enrolled natural join courses where student_id = $1 and dueDate < now()', [user_id]);
        return assignments;
    });
}

/**
 * Retrieve all of the user's current assignments for a course.
 */
const retrieveUserCurrentAssignmentsForCourse = function(user_id, course_id) {
    return connection.task('retrieveUserCurrentAssignmentsForCourse', function(t) {
        const assignments = t.any('select * from assignments natural join course_assignments natural join enrolled natural join courses where student_id = $1 and course_id = $2 and dueDate >= now()', [user_id, course_id]);
        return assignments;
    });
}

/**
 * Retrieve all of the user's past assignments for a course.
 */
const retrieveUserPastAssignmentsForCourse = function(user_id, course_id) {
    return connection.task('retrieveUserPastAssignmentsForCourse', function(t) {
        const assignments = t.any('select * from assignments natural join course_assignments natural join enrolled natural join courses where student_id = $1 and course_id = $2 and dueDate < now()', [user_id, course_id]);
        return assignments;
    });
}

/**
 * Retrieve assignment details.
 */
const retrieveAssignmentDetails = function(user_id, assignment_id) {
    return connection.task('retrieveAssignmentDetails', function(t) {
        const assignment = t.any('select assignments.assignment_id, title, dueDate, details, assignments.filePath As Materials, maxPoints, grade, feedBack As feedBack_Message, feedBack_filepath, assignment_filePath from assignments, submitted_assignments where assignments.assignment_id = submitted_assignments.assignment_id and student_id = $1 and submitted_assignments.assignment_id = $2;', [user_id, assignment_id]);
        return assignment;
    });
}

/**
 * Insert assignment into submitted assignments
 */
const insertAssignment = function(user_id, assignment_id, filePath) {
    return connection.task('insertAssignment', function(t) {
        return t.none('INSERT INTO submitted_assignments(student_id, assignment_id, assignment_filePath, grade) VALUES ($1,$2,$3,null)', [user_id, assignment_id,filePath]);
    });
}

/**
 *  Delete assignment from submitted assignments
 */
const deleteAssignment = function(user_id, assignment_id) {
    return connection.task('deleteAssignment', function(t) {
        return t.none('delete from submitted_assignments where student_id = $1 and assignment_id = $2;', [user_id, assignment_id]);
    });
}

/**
 *  Check if the assignments for a course are submitted
 */
const checkSubmission = function(user_id, course_id) {
    return connection.task('checkSubmission', function(t) {
        const submissions = t.any('select assignment_id, isSubmitted($1, assignment_id) from assignments where assignment_id IN (select assignment_id from course_assignments where course_id = $2);', [user_id, course_id]);
        return submissions; 
    });
}

checkSubmission(1, 4143)
  .then(submissions=> {
      console.log(submissions);
  })
  .catch(error =>{
      console.log("error");
  });


module.exports = {
    retrieveCourses_assignments,
    retrieveUserAssignments,
    retrieveUserCurrentAssignments,
    retrieveUserPastAssignments,
    retrieveUserCurrentAssignmentsForCourse,
    retrieveUserPastAssignmentsForCourse,
    retrieveAssignmentDetails,
    insertAssignment,
    deleteAssignment,
    checkSubmission
  }