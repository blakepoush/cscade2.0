window.onload = () => {
  document.getElementById("courseSelect").addEventListener("change", showHeader);
}

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
  let category = categorySelect.value;
  
  if(category == "grades") {
    console.log("G");
    //ajaxRequest("GET", `/grades/getGrades/${courseId}`, {}, insertData);
  } else if(category == "assignments") {
    console.log("A");
    //ajaxRequest("GET", `/grades/getGrades/${courseId}`, {}, insertData);
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
}