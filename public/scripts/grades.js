window.onload = () => {
  document.getElementById("courseSelect").addEventListener("change", getGrades);
}

function getGrades() {
  let select = document.getElementById("courseSelect");
  let id = select.value;
  document.getElementById("courseHeader").innerHTML = select.options[select.selectedIndex].text;
  ajaxRequest("GET", `/grades/getGrades/${id}`, {}, insertGrades);
}

function insertGrades(data) {
  console.log(data);
  document.getElementById("gradeContainer").innerHTML = data;
}