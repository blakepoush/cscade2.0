window.onload = () => {
  document.getElementById("courseSelect").addEventListener("change", getAssignments);
}

function getAssignments() {
  let id = document.getElementById("courseSelect").value;
  ajaxRequest("GET", `/courses/getAssignments/${id}`, {}, insertAssignments);
}

function insertAssignments(data) {
  console.log(data);
  document.getElementById("assignmentContainer").innerHTML = data;
}