var courseModel = require('../models/courseModel.js');
var assignmentModel = require('../models/assignmentModel.js');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
/*
/**
 * TODO: confer with others about what other data/functions are needed
 */

/**
 * Get the Assignments Page.
 */
module.exports.index = function(req, res, next) {
  if(req.session.user) {
    courseModel.retrieveCourses_ofStudent(req.session.user.user_id)
    .then(courses => {
      if(req.params.assignmentId) {
        var assignmentId = parseInt(req.params.assignmentId);
        courseModel.retrieveCourseID(req.params.assignmentId)
        .then(courseId => {
          assignmentModel.retrieveUserCurrentAssignmentsForCourse(req.session.user.user_id, courseId.course_id)
          .then(currentAssignments => {
            assignmentModel.retrieveUserPastAssignmentsForCourse(req.session.user.user_id, courseId.course_id)
              .then(pastAssignments => {
                assignmentModel.retrieveAssignmentDetails(req.session.user.user_id, assignmentId)
                  .then(details => {
                    res.render('assignments', {
                      page: 'Assignments',
                      courses: courses,
                      currentAssignments: currentAssignments, 
                      pastAssignments: pastAssignments, 
                      assignmentId: req.params.assignmentId, 
                      courseId: courseId.course_id,
                      details: details[0]
                    });
                  })
                  .catch(err => {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(err));
                  });
              })
              .catch(err => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({"error": "Errors Retrieving Data"}));
              });
          })
          .catch(err => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({"error": "Errorss Retrieving Data"}));
          });
        })
        .catch(err => {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({"error": "Error Retrieving Data"}));
        });
      } else {
        res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
        res.render('assignments', {
          page: 'Assignments',
          courses: courses
        });
      }
    });
  } else {
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('login', {
			page: 'Student Login',
			error: "You must be logged in to access this page."
		});
  }
}

/**
 * Get the details for an assignment (AJAX Request).
 */
module.exports.getAssignmentInfo = function(req, res, next) {
  if(req.session.user) {
    var assignmentId = parseInt(req.params.assignmentId);
    assignmentModel.retrieveAssignmentDetails(req.session.user.user_id, assignmentId)
      .then(details => {
        res.render('partials/assignmentDetails', {details: details[0]});
        //res.end(JSON.stringify(details[0]));
      })
      .catch(err => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(err));
      });
  } else {
    res.end(JSON.stringify({"error": "You must be logged in to access assignment details!"}));
  }
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    try{
      fs.mkdirSync('./uploads/studentUploads/'+ req.session.user.user_id,{recursive:true});
    }
    catch(err){
      if(err.code !== 'EEXIST') throw err;
    }
    cb(null, './uploads/studentUploads/'+ req.session.user.user_id);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage }).single("assignmentFile");

module.exports.uploadFile = function(req, res, next) {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    }
    else {
      if (!req.file) {
        console.log("No File Selected.");
      }
      else {
        console.log(req.file);
        res.end();
      }
    }
  });
}
