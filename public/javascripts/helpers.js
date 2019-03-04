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