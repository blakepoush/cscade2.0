var connection = require("./db.js");

/**
 * Retrieve grades that instructors and GA's made for assignment
 */
const retrieveGrades  = async function(user_id) {
    return connection.task('retrieveGrades ', function *(t) {
        /**
         * TODO: Better query for all grades to a course, not just one per assignment
         */
        const grades= yield t.any('Select ga_grade.grade, instructor_grade.grade, ga_grade.assignment_id, instructor_grade.assignment_id From ga_grade, instructor_grade, course_assignments where ga_grade.assignment_id = course_assignments.assignment_id or instructor_grade.assignment_id = course_assignments.assignment_id');
        return yield grades;
    });
}

retrieveGrades(1)
.then(grades => {
    console.log(grades);
})
.catch(error =>{
    console.log("error");
});

module.exports = {
    retrieveGrades,
}