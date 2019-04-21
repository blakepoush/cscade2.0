window.onload = () => {
  document.getElementById("courseSelect").addEventListener("change", showHeader);
}

var category = "";

/**
 * Show Name and Category Select for a Course.
 */
function showHeader() {
  let courseSelect = document.getElementById("courseSelect");
  let categoryHTML = "<select class='form-control' id='categorySelect'><option selected='selected' disabled='disabled'>Select Category</option><option class='dropdown-item' value='assignments'>Assignments</option><option class='dropdown-item' value='grades'>Grades</option><option class='dropdown-item' value='notes'>Notes</option></select>";
  document.getElementById("resourceContainer").innerHTML = "";
  document.getElementById("categoryContainer").innerHTML = categoryHTML;
  document.getElementById("courseHeader").innerHTML = courseSelect.options[courseSelect.selectedIndex].text;
  document.getElementById("categorySelect").addEventListener("change", getResource);
}

/**
 * Retrieve a course resource based on the category selected.
 */
function getResource() {
  let courseSelect = document.getElementById("courseSelect");
  let courseId = courseSelect.value;
  let categorySelect = document.getElementById("categorySelect");
  category = categorySelect.value;
  
  if(category == "grades") {
    console.log("G");
    ajaxRequest("GET", `/grades/getGrades/${courseId}`, {}, insertData);
  } else if(category == "assignments") {
    console.log("A");
    ajaxRequest("GET", `/courses/getAssignments/${courseId}/${true}`, {}, insertData);
    //ajaxRequest("GET", `/assignments/getCourseAssignments/${assignmentId}`, {}, insertData);
  } else if(category == "notes") {
    console.log("N");
    ajaxRequest("GET", `/courses/getNotes/${courseId}`, {}, insertData);
  }
}

/**
 * Insert Data from AJAX Request.
 */
function insertData(data) {
  console.log(data);
  document.getElementById("resourceContainer").innerHTML = data;

  if(category == "assignments") {
    addEvent();
  }
}

function addEvent() {
  let events = document.getElementsByClassName("assignmentInfo");
  for(var i = 0; i < events.length; i++) {
    events[i].addEventListener("click", getAssignmentInfo);
  }
}

function getAssignmentInfo(e) {
  e.preventDefault();
  var id = e.target.getAttribute("data-info");
  ajaxRequest("GET", `/assignments/getAssignmentInfo/${id}`, {}, insertAssignmentInfo);
}

function insertAssignmentInfo(data) {
  console.log(data);
  document.getElementById("detailsContainer").innerHTML = data;
}