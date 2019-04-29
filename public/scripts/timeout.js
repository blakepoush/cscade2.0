
function idleTimer() {
  var timoutWarning = 540000; //Warning at 9 minutes
	var timoutNow = 600000; //Timeout at 10 minutes
	var logoutUrl = '/logout'; //Route to logout when timed out
	var body = document.getElementById("body");

	// Add event listeners for interacting with the page
	body.addEventListener("click", ResetTimers);
	body.addEventListener("mousemove", ResetTimers);
	window.addEventListener("scroll", ResetTimers);

	var warningTimer;
	var timeoutTimer;

	StartTimers();

	//Start timer function
	function StartTimers() {
		warningTimer = setTimeout(IdleWarning, timoutWarning);
		timeoutTimer = setTimeout(IdleTimeout, timoutNow);
	}

	//Reset timer function
	function ResetTimers() {
		clearTimeout(warningTimer);
		clearTimeout(timeoutTimer);
		StartTimers();
	}

	//Idle warning message
	function IdleWarning() {
		alert("Warning, you will soon be logged out due to inactivity.");
	}

	//End user session
	function IdleTimeout() {
		window.location = logoutUrl;
	}
}

idleTimer();
