/**
 * Function to handle AJAX Requests.
 * @param method    The HTTP method used (GET,POST, etc)
 * @param path      The URL for the request.
 * @param data      Data to be sent to the server. (JS Object)
 * @param success   The callback function for a successful request.
 * @param fail      The callback function for a failed request.
 */
function ajaxRequest(method, path, data, success, fail) {
  let httpRequest = new XMLHttpRequest();

  // Send AJAX Request
  httpRequest.open(method, path);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  
  // Send Data to the Server
  if(data) {
    httpRequest.send(JSON.stringify(data));
  } else {
    httpRequest.send();
  }

  // Listen for Response
  httpRequest.onreadystatechange = () => {
    try {
      if(httpRequest.readyState == XMLHttpRequest.DONE) {
        // Check Response Status
        if(httpRequest.status === 200) {
          if(success) {
            success(httpRequest.responseText);
          } 
        } else {
          if(fail) {
            fail();
          } else {
            alert("Request Error");
          }
        }
      }
    }
    catch(e) {
      alert(`Caught Exception: ${e.description}`)
    }
  };
}

function dismissAlerts() {
  var alerts = document.getElementsByClassName('cscadeAlert');
  for(var i = 0; i < alerts.length; i++) {
    alerts[i].style.display = "none";
  }
}

setTimeout(dismissAlerts, 5000);

window.onload = () => {trimDates();};
function trimDates(){
  var dates = document.getElementsByClassName("date");
    for(var i=0; i< dates.length;i++){
      dates[i].innerHTML = dates[i].innerHTML.substr(0,29);
    }
}