window.onload = () => {
  document.getElementById("courseSelect").addEventListener("change", getAssignments);
}

function getAssignments() {
  let select = document.getElementById("courseSelect");
  let id = select.value;
  document.getElementById("courseHeader").innerHTML = select.options[select.selectedIndex].text;
  ajaxRequest("GET", `/courses/getAssignments/${id}`, {}, insertAssignments);
}

function insertAssignments(data) {
  console.log(data);
  document.getElementById("assignmentContainer").innerHTML = data;
}