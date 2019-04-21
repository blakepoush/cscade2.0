window.onload = () => {
  document.getElementById("courseSelect").addEventListener("change", getAssignments);
}

function getAssignments() {
  document.getElementById("detailsContainer").innerHTML = "";
  let select = document.getElementById("courseSelect");
  let id = select.value;
  document.getElementById("courseHeader").innerHTML = select.options[select.selectedIndex].text;
  ajaxRequest("GET", `/courses/getAssignments/${id}/${false}`, {}, insertAssignments);
}

function insertAssignments(data) {
  console.log(data);
  document.getElementById("assignmentContainer").innerHTML = data;
  addEvent();
  trimDates();
}

function addEvent() {
  let events = document.getElementsByClassName("assignmentInfo");
  console.log(events);
  for(var i = 0; i < events.length; i++) {
    events[i].addEventListener("click", getAssignmentInfo);
  }
}

function getAssignmentInfo(e) {
  e.preventDefault();
  var id = e.target.getAttribute("data-info");
  //insertAssignmentInfo("hi");
  ajaxRequest("GET", `/assignments/getAssignmentInfo/${id}`, {}, insertAssignmentInfo);
}

function insertAssignmentInfo(data) {
  console.log(data);
  document.getElementById("detailsContainer").innerHTML = data;
}
