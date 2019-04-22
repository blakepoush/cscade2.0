var courseModel = require('../models/courseModel.js');
var assignmentModel = require('../models/assignmentModel.js');
/*const bodyParser= require('body-parser')
const multer = require('multer');
app.use(bodyParser.urlencoded({extended: true}))
const path = require('path'); */

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


/**
 * Uploads files to studentUploads folder
 * TODO: find and modify html code for file names and types
 *          POST form
 *       make file name either original name or given name (from html) + student id
 *       decide if any limits should be made for files uploaded
 * 
 <form action="/uploadfile" enctype="multipart/form-data" method="POST"> 
   <input type="file" name="myFile" />
   <input type="submit" value="Upload a file"/>
</form>
 * 
 */

//https://code.tutsplus.com/tutorials/file-upload-with-multer-in-node--cms-32088
//https://www.youtube.com/watch?v=9Qzmri1WaaE&t=4s


/* set storage location 
const storage = multer.diskStorage({
  destination: './uploads/studentUploads',
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now() + path.extname(file.originalname));
  }
});
 
//set upload specs
const upload = multer({ storage: storage }).single("myFile");

//POST file for upload
app.post("/upload", (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      alert(err);
    }
    else {
      if (!file) {
        alert("No File Selected.");
      }
      else {
        res.send(file);
      }
    }
  });
});
*/ 