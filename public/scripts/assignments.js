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

function getAssignmentInfo() {
<<<<<<< HEAD
  alert("hi");
}
=======
  //alert("hi");
}
>>>>>>> 048bb68605b3f27979353152a3e9e29c5be7313d
